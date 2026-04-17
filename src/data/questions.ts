export type Question = {
  id: number
  text: string
  condition: Condition
  weight: number
}

export type Condition =
  | 'depression'
  | 'anxiety'
  | 'ptsd'
  | 'bipolar'
  | 'ocd'
  | 'schizophrenia'
  | 'adhd'
  | 'eating'

export const conditions: Condition[] = [
  'depression',
  'anxiety',
  'ptsd',
  'bipolar',
  'ocd',
  'schizophrenia',
  'adhd',
  'eating',
]

export const questions: Question[] = [
  // DEPRESSION (PHQ-9 inspired, 10 questions)
  { id: 1, text: 'I have little interest or pleasure in doing things I used to enjoy.', condition: 'depression', weight: 1 },
  { id: 2, text: 'I feel down, hopeless, or empty most of the day.', condition: 'depression', weight: 1 },
  { id: 3, text: 'I have trouble falling or staying asleep, or I sleep too much.', condition: 'depression', weight: 1 },
  { id: 4, text: 'I feel tired or have very little energy most days.', condition: 'depression', weight: 1 },
  { id: 5, text: 'I have a poor appetite or I overeat without being hungry.', condition: 'depression', weight: 1 },
  { id: 6, text: 'I feel bad about myself or that I am a failure.', condition: 'depression', weight: 1 },
  { id: 7, text: 'I have trouble concentrating on things like reading or watching TV.', condition: 'depression', weight: 1 },
  { id: 8, text: 'I move or speak noticeably slower than usual, or feel restless and fidgety.', condition: 'depression', weight: 1 },
  { id: 9, text: 'I have had thoughts of being better off dead or hurting myself.', condition: 'depression', weight: 2 },
  { id: 10, text: 'I feel emotionally numb or disconnected from people I care about.', condition: 'depression', weight: 1 },

  // ANXIETY - GAD-7 inspired (10 questions)
  { id: 11, text: 'I feel nervous, anxious, or on edge most days.', condition: 'anxiety', weight: 1 },
  { id: 12, text: 'I am unable to stop or control worrying.', condition: 'anxiety', weight: 1 },
  { id: 13, text: 'I worry too much about different things.', condition: 'anxiety', weight: 1 },
  { id: 14, text: 'I have trouble relaxing even when I have time to rest.', condition: 'anxiety', weight: 1 },
  { id: 15, text: 'I feel so restless that it is hard to sit still.', condition: 'anxiety', weight: 1 },
  { id: 16, text: 'I become easily annoyed or irritable.', condition: 'anxiety', weight: 1 },
  { id: 17, text: 'I feel afraid something awful might happen without knowing why.', condition: 'anxiety', weight: 1 },
  { id: 18, text: 'I experience sudden surges of intense fear or physical symptoms (heart pounding, sweating, shaking).', condition: 'anxiety', weight: 2 },
  { id: 19, text: 'I avoid situations or places because they make me anxious.', condition: 'anxiety', weight: 1 },
  { id: 20, text: 'My anxiety interferes with my daily responsibilities or relationships.', condition: 'anxiety', weight: 1 },

  // PTSD - PCL-5 inspired (10 questions)
  { id: 21, text: 'I have repeated, disturbing memories or images of a stressful experience from the past.', condition: 'ptsd', weight: 1 },
  { id: 22, text: 'I have repeated, disturbing dreams of a past traumatic event.', condition: 'ptsd', weight: 1 },
  { id: 23, text: 'I suddenly feel or act as if a stressful experience is happening again (flashback).', condition: 'ptsd', weight: 2 },
  { id: 24, text: 'I feel very upset when something reminds me of a past traumatic experience.', condition: 'ptsd', weight: 1 },
  { id: 25, text: 'I avoid thinking about or having feelings related to a traumatic experience.', condition: 'ptsd', weight: 1 },
  { id: 26, text: 'I avoid external reminders of a traumatic experience (people, places, objects, situations).', condition: 'ptsd', weight: 1 },
  { id: 27, text: 'I feel emotionally distant or cut off from other people.', condition: 'ptsd', weight: 1 },
  { id: 28, text: 'I feel on guard, watchful, or easily startled for no clear reason.', condition: 'ptsd', weight: 1 },
  { id: 29, text: 'I have difficulty experiencing positive feelings (e.g., happiness, love).', condition: 'ptsd', weight: 1 },
  { id: 30, text: 'I blame myself or others for a traumatic event that happened to me.', condition: 'ptsd', weight: 1 },

  // BIPOLAR (10 questions)
  { id: 31, text: 'I experience periods of unusually high mood or extreme happiness that feels out of control.', condition: 'bipolar', weight: 1 },
  { id: 32, text: 'During high mood periods, I need very little sleep but still feel energetic.', condition: 'bipolar', weight: 2 },
  { id: 33, text: 'I talk more than usual or feel pressure to keep talking during certain periods.', condition: 'bipolar', weight: 1 },
  { id: 34, text: 'My thoughts race and jump from idea to idea very quickly.', condition: 'bipolar', weight: 1 },
  { id: 35, text: 'During high periods I take risks or make impulsive decisions I later regret.', condition: 'bipolar', weight: 2 },
  { id: 36, text: 'I have periods of very low mood that alternate with periods of very high mood.', condition: 'bipolar', weight: 2 },
  { id: 37, text: 'People around me have noticed big changes in my behavior or energy levels.', condition: 'bipolar', weight: 1 },
  { id: 38, text: 'I have experienced periods where I felt I had special powers or an important mission.', condition: 'bipolar', weight: 2 },
  { id: 39, text: 'I have had periods of increased goal-directed activity or agitation lasting days.', condition: 'bipolar', weight: 1 },
  { id: 40, text: 'My mood swings significantly affect my work, relationships, or daily life.', condition: 'bipolar', weight: 1 },

  // OCD (10 questions)
  { id: 41, text: 'I have unwanted, repeated thoughts, urges, or images that feel intrusive.', condition: 'ocd', weight: 1 },
  { id: 42, text: 'I perform repetitive behaviors (washing, checking, ordering) to reduce anxiety.', condition: 'ocd', weight: 2 },
  { id: 43, text: 'I spend more than 1 hour a day on these thoughts or behaviors.', condition: 'ocd', weight: 2 },
  { id: 44, text: 'I feel a strong need to arrange or organize things in a specific way.', condition: 'ocd', weight: 1 },
  { id: 45, text: 'I repeatedly check things (locks, stove, appliances) even when I know they are fine.', condition: 'ocd', weight: 1 },
  { id: 46, text: 'I feel intense distress if I cannot complete a ritual or routine.', condition: 'ocd', weight: 1 },
  { id: 47, text: 'I fear contamination from germs or dirt and wash my hands excessively.', condition: 'ocd', weight: 1 },
  { id: 48, text: 'I have unwanted thoughts of harming myself or others, even though I do not want to act on them.', condition: 'ocd', weight: 1 },
  { id: 49, text: 'I keep objects I no longer need because throwing them away causes extreme distress.', condition: 'ocd', weight: 1 },
  { id: 50, text: 'My repetitive thoughts or behaviors interfere with my daily life or relationships.', condition: 'ocd', weight: 1 },

  // SCHIZOPHRENIA (10 questions)
  { id: 51, text: 'I have heard voices or sounds that other people cannot hear.', condition: 'schizophrenia', weight: 3 },
  { id: 52, text: 'I have seen things that other people say are not there.', condition: 'schizophrenia', weight: 3 },
  { id: 53, text: 'I believe that people are plotting against me or trying to harm me.', condition: 'schizophrenia', weight: 2 },
  { id: 54, text: 'I feel that messages are being sent specifically to me through TV, radio, or strangers.', condition: 'schizophrenia', weight: 2 },
  { id: 55, text: 'I have beliefs that others find strange or impossible.', condition: 'schizophrenia', weight: 2 },
  { id: 56, text: 'My thoughts feel disorganized or do not make sense even to me.', condition: 'schizophrenia', weight: 1 },
  { id: 57, text: 'I feel flat emotionally, with little reaction to things that would normally cause feelings.', condition: 'schizophrenia', weight: 1 },
  { id: 58, text: 'I have difficulty speaking clearly or staying on topic.', condition: 'schizophrenia', weight: 1 },
  { id: 59, text: 'I feel like my thoughts are being controlled or inserted by an outside force.', condition: 'schizophrenia', weight: 3 },
  { id: 60, text: 'I withdraw from social activities and have lost motivation to take care of myself.', condition: 'schizophrenia', weight: 1 },

  // ADHD (10 questions)
  { id: 61, text: 'I have difficulty sustaining attention on tasks or activities for long.', condition: 'adhd', weight: 1 },
  { id: 62, text: 'I make careless mistakes in work or other activities due to inattention.', condition: 'adhd', weight: 1 },
  { id: 63, text: 'I often lose things necessary for tasks (keys, phone, documents).', condition: 'adhd', weight: 1 },
  { id: 64, text: 'I am easily distracted by unrelated thoughts or external stimuli.', condition: 'adhd', weight: 1 },
  { id: 65, text: 'I forget daily activities or obligations regularly.', condition: 'adhd', weight: 1 },
  { id: 66, text: 'I fidget, tap, or feel restless when sitting for extended periods.', condition: 'adhd', weight: 1 },
  { id: 67, text: 'I feel driven by a motor and find it hard to slow down or relax.', condition: 'adhd', weight: 1 },
  { id: 68, text: 'I blurt out answers before questions are finished or interrupt others frequently.', condition: 'adhd', weight: 1 },
  { id: 69, text: 'I have difficulty organizing tasks, activities, or belongings.', condition: 'adhd', weight: 1 },
  { id: 70, text: 'I procrastinate on or avoid tasks that require sustained mental effort.', condition: 'adhd', weight: 1 },

  // EATING DISORDERS (10 questions)
  { id: 71, text: 'I am terrified of gaining weight or becoming fat.', condition: 'eating', weight: 2 },
  { id: 72, text: 'I restrict food intake severely even when I know I am underweight.', condition: 'eating', weight: 2 },
  { id: 73, text: 'I eat large amounts of food in a short time and feel out of control during it.', condition: 'eating', weight: 2 },
  { id: 74, text: 'After eating, I try to compensate by vomiting, using laxatives, or excessive exercise.', condition: 'eating', weight: 3 },
  { id: 75, text: 'I think about food, calories, or my body weight constantly throughout the day.', condition: 'eating', weight: 1 },
  { id: 76, text: 'I feel my body shape or weight is deeply tied to my self-worth.', condition: 'eating', weight: 1 },
  { id: 77, text: 'I avoid eating with others or hide my eating habits.', condition: 'eating', weight: 1 },
  { id: 78, text: 'I feel significant guilt or shame after eating.', condition: 'eating', weight: 1 },
  { id: 79, text: 'I have experienced physical symptoms related to my eating habits (hair loss, dizziness, weakness).', condition: 'eating', weight: 2 },
  { id: 80, text: 'My eating habits significantly interfere with my daily life, work, or relationships.', condition: 'eating', weight: 1 },
]

export const answerOptions = [
  { label: 'Never', value: 0 },
  { label: 'Rarely', value: 1 },
  { label: 'Sometimes', value: 2 },
  { label: 'Often', value: 3 },
  { label: 'Always', value: 4 },
]

export const conditionMaxScores: Record<Condition, number> = {
  depression: 11,
  anxiety: 11,
  ptsd: 11,
  bipolar: 12,
  ocd: 11,
  schizophrenia: 17,
  adhd: 10,
  eating: 14,
}

export function computeScores(answers: Record<number, number>): Record<Condition, number> {
  const scores: Record<Condition, number> = {
    depression: 0,
    anxiety: 0,
    ptsd: 0,
    bipolar: 0,
    ocd: 0,
    schizophrenia: 0,
    adhd: 0,
    eating: 0,
  }
  for (const q of questions) {
    const ans = answers[q.id] ?? 0
    scores[q.condition] += ans * q.weight
  }
  return scores
}

export function getVerdict(scores: Record<Condition, number>): {
  verdict: 'good' | 'warn' | 'danger'
  flagged: Condition[]
} {
  const thresholds: Record<Condition, { warn: number; danger: number }> = {
    depression: { warn: 10, danger: 18 },
    anxiety: { warn: 10, danger: 18 },
    ptsd: { warn: 10, danger: 18 },
    bipolar: { warn: 10, danger: 20 },
    ocd: { warn: 10, danger: 18 },
    schizophrenia: { warn: 8, danger: 15 },
    adhd: { warn: 14, danger: 24 },
    eating: { warn: 10, danger: 18 },
  }

  const flagged: Condition[] = []
  let maxSeverity: 'good' | 'warn' | 'danger' = 'good'

  for (const c of conditions) {
    const s = scores[c]
    const t = thresholds[c]
    if (s >= t.danger) {
      flagged.push(c)
      maxSeverity = 'danger'
    } else if (s >= t.warn) {
      if (!flagged.includes(c)) flagged.push(c)
      if (maxSeverity !== 'danger') maxSeverity = 'warn'
    }
  }

  return { verdict: maxSeverity, flagged }
}
