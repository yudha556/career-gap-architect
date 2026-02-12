# Career Gap Architect

**Career Gap Architect** is a full-stack AI-powered application designed to analyze the gap between a candidate's **Resume** and a **Target Job Description (JD)**. 
The system provides a structured gap analysis, including missing skills, a personalized learning roadmap, and targeted interview questions using advanced AI models.

This project is built as part of a technical assessment to demonstrate modern system design, robust backend architecture, and seamless frontend integration.

---

## 🚀 Core Features

- **Dual Input Method**: Upload Resume in PDF format or paste as plain text.
- **AI-Powered Analysis**: Detailed gap identification using Groq AI integration.
- **Actionable Roadmap**: 3 concrete steps to bridge skills gaps with estimated timelines.
- **Interview Prep**: Targeted technical questions using the **STAR Method** guide.
- **Smart Caching**: Input hashing mechanism to avoid redundant AI calls and save tokens.
- **Persistence**: Save and view history of past analyses with a dedicated dashboard.

---

## 🛠 Tech Stack

### Frontend
- **Next.js** (App Router & Turbopack)
- **Tailwind CSS** & **shadcn/ui** for modern UI
- **Lucide Icons** & **Axios** for API communication

### Backend
- **NestJS** (Modular Architecture)
- **Prisma ORM** for database management
- **Groq AI** for high-speed LLM processing

### Database
- **PostgreSQL** (Hosted via Supabase)

### Workspace Management
- **pnpm Workspaces** (Monorepo)
- **Concurrent Execution** for optimized development workflow

---

## 📂 Project Structure

```bash
career-gap-architect/
├─ apps/
│  ├─ web/   # Frontend (Next.js) - Port 3000
│  └─ api/   # Backend (NestJS)  - Port 4000
├─ package.json # Root config & orchestration
├─ pnpm-workspace.yaml
└─ README.md
```


---

## Getting Started (Development)

### Install dependencies
```bash
pnpm install
```
### Run all apps (Fe & BE)
    pnpm dev

### setup ENV
  DATABASE_URL="your_postgresql_url"
  GROQ_API_KEY="your_groq_api_key"
  PORT=4000

## System Design Notes
- A hashing mechanism is used on Resume + JD input to detect duplicate submissions.
- Cached results are stored in the database and returned instantly when available.
- The backend includes a validation layer to ensure malformed AI responses do not break the frontend.
- The frontend renders AI output using Markdown for better readability and structure.

## Status

This project is actively developed and focuses on clarity, correctness, and architectural decisions rather than production completeness.

## Author

Yudha
- GitHub: https://github.com/yudha556
- LinkedIn: https://www.linkedin.com/in/hendrian-yudha-pratama-021b2530b/