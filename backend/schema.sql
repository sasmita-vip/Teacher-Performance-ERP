-- Sample data for the Teacher Performance demo (fictional teachers and marks)
CREATE TABLE IF NOT EXISTS teachers (
  id   SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS teacher_performance (
  teacher_id    INT REFERENCES teachers(id),
  term          TEXT NOT NULL,   -- 'Quarterly', 'Half-Yearly' or 'Annual'
  average_marks NUMERIC NOT NULL
);

INSERT INTO teachers (name) VALUES
  ('Mr. Sharma - Math'),
  ('Ms. Rani - Science'),
  ('Mr. Kumar - English');

INSERT INTO teacher_performance (teacher_id, term, average_marks) VALUES
  (1, 'Quarterly', 45), (1, 'Half-Yearly', 52), (1, 'Annual', 60),
  (2, 'Quarterly', 50), (2, 'Half-Yearly', 49), (2, 'Annual', 47),
  (3, 'Quarterly', 60), (3, 'Half-Yearly', 63), (3, 'Annual', 68);
