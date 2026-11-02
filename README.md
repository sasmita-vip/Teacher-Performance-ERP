# Teacher Performance ERP

Built during an internship at Savyasasy Software Solutions, Chennai.

Angular + Node.js dashboard that tracks how students perform under each teacher across the school year and writes a short report using an AI model.

## What it does
- Dropdown of teachers loaded from PostgreSQL
- Bar and line charts of average student marks for Quarterly, Half-Yearly and Annual terms
- AI-written performance remarks through the Groq API (model `llama-3.1-8b-instant`), classifying the trend as improved or not based on Annual vs Quarterly marks
- If the AI call fails, the page shows a simple fallback summary of the marks

## Tech stack
Angular 21, Chart.js / ng2-charts, Node.js, Express, PostgreSQL (`pg`), Groq SDK

## Run it
**Backend** (port 3000)
```bash
cd backend
npm install
cp .env.example .env     # add your PostgreSQL details and a Groq API key
psql -d teachererp -f schema.sql   # creates the tables with sample data
npm start
```
Get a free Groq key at https://console.groq.com

**Frontend** (http://localhost:4200)
```bash
cd frontend
npm install
npm start
```

## Notes
- The backend allows requests from `http://localhost:4200` only.
- Fictional sample data only.
