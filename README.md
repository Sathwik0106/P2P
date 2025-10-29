# P2P (Project BOLT)

A Vite + React + TypeScript app. UI is preserved as-is; a lightweight localStorage-backed service layer powers functionality for posts, jobs, skill swaps, network, and exams.

## Structure
- Root: repo metadata
- `project/`: the Vite React app
  - `src/services/`: localStorage-backed services
  - `src/data/mockData.ts`: seed data

## Run (development)
From PowerShell:

```powershell
cd "C:\Users\Sathwik\OneDrive\Desktop\Project BOLT\project"
npm ci
npm run dev -- --port 5173
```

Open http://localhost:5173/

## Build (production)
```powershell
cd "C:\Users\Sathwik\OneDrive\Desktop\Project BOLT\project"
npm run build
```

## What’s wired (no UI changes)
- Create posts; like/comment/share persist
- Save/apply to jobs; search/filter
- Follow/unfollow mentors
- Register/unregister for exams
- Create/list skill swap requests

Data persists in browser localStorage. Delete site data to reset.
