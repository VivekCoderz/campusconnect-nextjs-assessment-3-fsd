# CampusConnect – Student Management Portal

CS3503 Full Stack Development-II (Next.js) – Assessment 1

A responsive multi-page frontend built with **Next.js (App Router)**, **React**, **JavaScript** and **plain CSS**. All data is static dummy data in `lib/data.js`.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Routes

| Route | Page |
|---|---|
| `/` | Landing / home page |
| `/login` | Login with name, email, password – the entered name is shown across the portal |
| `/dashboard` | Stats, recent assignments, deadlines, activities |
| `/students` | Search + filter by department, student cards |
| `/students/[id]` | Student profile, skills, courses, attendance, assignments |
| `/courses` | Course cards with faculty, credits, progress |
| `/courses/[id]` | Course details, modules, assignments |
| `/assignments` | Assignment table with status filter + Submit button |
| `/profile` | Logged-in student profile |
| `/settings` | Account, preferences, password |

## Folder Structure

```
app/
  layout.js            root layout
  globals.css          all styles (responsive)
  page.js              landing page
  login/page.js
  (main)/layout.js     navbar + footer for pages after login
  (main)/dashboard, students, students/[id], courses, courses/[id],
         assignments, profile, settings
components/            Navbar, StatusBadge, ProgressBar
lib/data.js            course, student and assignment data
lib/useUser.js         saves and reads the logged-in user
```

## Repository

https://github.com/VivekCoderz/campusconnect-nextjs-assessment-3-fsd
