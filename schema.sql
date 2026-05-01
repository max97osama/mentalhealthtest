-- Run this on your GCP VM as postgres user:
-- psql -U postgres -f schema.sql

CREATE DATABASE mental_health_db;

\c mental_health_db;

CREATE TABLE results (
  id SERIAL PRIMARY KEY,
  ip VARCHAR(45),
  country VARCHAR(100),
  verdict VARCHAR(20) NOT NULL,
  depression_score INT NOT NULL,
  anxiety_score INT NOT NULL,
  ptsd_score INT NOT NULL,
  bipolar_score INT NOT NULL,
  ocd_score INT NOT NULL,
  schizophrenia_score INT NOT NULL,
  adhd_score INT NOT NULL,
  eating_score INT NOT NULL,
  flagged_conditions TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);
