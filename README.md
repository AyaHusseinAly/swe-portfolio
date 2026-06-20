# Aya Hussein — Portfolio

Full stack developer portfolio built with Angular, showcasing skills, experience, and projects.

**Live site:** https://ayahusseinaly.github.io/swe-portfolio/

## Tech Stack

- Angular 22
- SCSS
- GitHub Pages + GitHub Actions

## Features

- Responsive single-page layout
- Hero, About, Skills, Experience, Projects, and Contact sections
- Filterable project gallery
- Contact form (opens email client)
- Automated deployment to GitHub Pages

## Prerequisites

- Node.js 20+
- npm 10+

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Production Build

```bash
# Standard build
npm run build

# GitHub Pages build (with correct base href)
npm run build:pages
```

## Customize Content

Edit `src/app/data/portfolio.data.ts` to update:

- Profile info (name, email, social links)
- Skills and proficiency levels
- Work experience
- Project cards and GitHub links

Replace `public/profile-placeholder.svg` with a real photo when available.

## Deploy to GitHub Pages

### Step 1 — Create the GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `swe-portfolio`
3. Visibility: **Public** (required for free GitHub Pages)
4. Do **not** initialize with a README if pushing existing code
5. Click **Create repository**

### Step 2 — Push your code

```bash
git init
git add .
git commit -m "Initial commit: Aya Hussein portfolio"
git branch -M main
git remote add origin https://github.com/AyaHusseinAly/swe-portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Open the repo on GitHub
2. Go to **Settings** → **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. After the workflow completes, your site will be live at:
   `https://ayahusseinaly.github.io/swe-portfolio/`

### Step 4 — Verify deployment

1. Open the **Actions** tab and confirm the "Deploy to GitHub Pages" workflow succeeded
2. Visit the URL shown under **Settings → Pages**

> **Note:** If you use a different repo name, update `baseHref` in `angular.json` (`github-pages` config) and the `base-href` in the workflow to match.

## Project Structure

```
src/app/
├── components/
│   ├── header/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── experience/
│   ├── projects/
│   ├── contact/
│   └── footer/
├── data/
│   └── portfolio.data.ts
├── app.ts
└── app.config.ts
```

## Contact

- **Email:** aya.hussein3107@gmail.com
- **WhatsApp:** +20 101 183 3038
- **GitHub:** [AyaHusseinAly](https://github.com/AyaHusseinAly)
- **LinkedIn:** [aya-hussein-19a359134](https://www.linkedin.com/in/aya-hussein-19a359134)
- **Website:** [ayahussein.com](https://ayahussein.onrender.com/)

---

Built with Angular by Aya Hussein
