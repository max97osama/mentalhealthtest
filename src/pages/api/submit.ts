import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '@/lib/db'
import { computeScores, getVerdict } from '@/data/questions'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { answers } = req.body
  if (!answers || typeof answers !== 'object') {
    return res.status(400).json({ error: 'Invalid answers' })
  }

  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    null

  let country: string | null = null
  try {
    if (ip && ip !== '::1' && ip !== '127.0.0.1') {
      const geo = await fetch(`https://ipapi.co/${ip}/json/`)
      const geoData = await geo.json()
      country = geoData.country_name || null
    }
  } catch {
    country = null
  }

  const scores = computeScores(answers)
  const { verdict, flagged } = getVerdict(scores)

  try {
    const result = await pool.query(
      `INSERT INTO results
        (ip, country, verdict,
         depression_score, anxiety_score, ptsd_score, bipolar_score,
         ocd_score, schizophrenia_score, adhd_score, eating_score,
         flagged_conditions)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
       RETURNING id`,
      [
        ip, country, verdict,
        scores.depression, scores.anxiety, scores.ptsd, scores.bipolar,
        scores.ocd, scores.schizophrenia, scores.adhd, scores.eating,
        flagged,
      ]
    )
    return res.status(200).json({ id: result.rows[0].id })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Database error' })
  }
}
