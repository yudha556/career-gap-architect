# Career Gap Architect

Career Gap Architect is a full-stack application that analyzes the gap between a user's **Resume** and a **Target Job Description (JD)**.  
The system generates a structured **gap analysis**, including missing skills, a learning roadmap, and targeted interview questions using AI.

This project is built as part of a technical assessment to demonstrate system design, backend architecture, and frontend integration.

---

##  Core Features

- Upload or paste **Resume** and **Job Description**
- AI-powered **Gap Analysis**, including:
  - Missing Skills
  - 3 Concrete Learning Steps
  - 3 Targeted Interview Questions
- **Caching mechanism** to avoid redundant AI calls for identical inputs
- Clean and readable UI with Markdown rendering
- Graceful error handling and validation layer

---

##  Tech Stack

### Frontend
- Next.js (App Router)
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- React Markdown

### Backend
- NestJS
- Prisma ORM
- AI Service Integration

### Database
- PostgreSQL (Supabase)

### Monorepo
- pnpm workspace
- Turborepo

---

## Project Structure

``` bash
career-gap-architect/
├─ apps/
│ ├─ web/ # Frontend (Next.js)
│ └─ api/ # Backend (NestJS)
├─ package.json # Turborepo config
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