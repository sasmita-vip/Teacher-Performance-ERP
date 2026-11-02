import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Sample teacher data (no database required)
const teachers = [
  {
    id: 1,
    name: 'Dr. Aris Thorne',
    department: 'Computer Science'
  },
  {
    id: 2,
    name: 'Prof. Elena Rostova',
    department: 'Mathematics'
  }
];

// Sample performance data
const performanceData = {
  1: {
    terms: ['Quarterly', 'Half-Yearly', 'Annual'],
    marks: [45, 58, 76]
  },
  2: {
    terms: ['Quarterly', 'Half-Yearly', 'Annual'],
    marks: [72, 65, 82]
  }
};

// Generate performance remarks without an AI API
function generateRemarks(teacher, terms, marks) {
  const firstMark = marks[0];
  const lastMark = marks[marks.length - 1];

  const classification =
    lastMark > firstMark ? 'IMPROVED' :
    lastMark < firstMark ? 'DE-IMPROVED' :
    'STABLE';

  return `
### Data Insights

The performance analysis for ${teacher.name}, from the ${teacher.department} department, shows the following results: ${terms.map((term, index) => `${term}: ${marks[index]} marks`).join(', ')}.

The overall performance classification is ${classification}. The marks show how performance has changed across the three academic terms. These results provide a useful overview of academic progress and help identify areas that may need attention.

### Root Cause Analysis

The changes in marks may be related to differences in student understanding, teaching methods, classroom participation, revision practices and assessment difficulty. The available marks alone cannot establish the exact cause of the changes. Further classroom observations and student feedback can help identify the reasons behind the results.

### Action Plan & Recommendations

1. Review assessment results regularly and identify topics where students have difficulty. Provide additional explanations, practice activities and revision sessions for those topics.

2. Use interactive teaching methods, periodic assessments and individual feedback to monitor student progress. Compare results in future terms to evaluate whether the teaching strategies are effective.
`;
}

// Home route
app.get('/', (req, res) => {
  res.send('Teacher Performance ERP Backend is Running!');
});

// Get all teachers
app.get('/api/teachers', (req, res) => {
  res.json(teachers);
});

// Get teacher performance
app.get('/api/performance/:teacher_id', (req, res) => {
  const teacherId = Number(req.params.teacher_id);

  const teacher = teachers.find(item => item.id === teacherId);
  const performance = performanceData[teacherId];

  if (!teacher || !performance) {
    return res.status(404).json({
      error: 'Teacher performance record not found'
    });
  }

  const { terms, marks } = performance;

  const remarks = generateRemarks(teacher, terms, marks);

  res.json({
    terms,
    marks,
    remarks
  });
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});