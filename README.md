# PrimerProyecto

A simple Angular + Firebase project that manages a list of recipes.

## Features
- Angular standalone components
- Firebase Firestore integration (configured in `src/app/app.config.ts`)
- Basic CRUD UI for recipes (add, list)

## Prerequisites
- Node.js (>= 18)
- npm
- Angular CLI (`npm i -g @angular/cli`)
- A Firebase project (already configured in `src/app/enviroment.ts`)

## Setup
```bash
# Clone the repo (once it is pushed)
git clone <repo-url>
cd PrimerProyecto

# Install dependencies
npm install

# Serve the app locally
npm run dev   # or ng serve
```

## Deploy to Firebase Hosting (optional)
```bash
# Build the Angular app
npm run build

# Deploy using Firebase CLI
firebase deploy --only hosting
```

## Git Workflow (baseline)
1. `git init` – initialise repository (if not already)
2. `git add .` – stage all files (respect `.gitignore`)
3. `git commit -m "Initial commit"`
4. Create a remote repository on GitHub/Bitbucket/GitLab and add it:
   ```bash
   git remote add origin https://github.com/USERNAME/PrimerProyecto.git
   ```
5. Push the main branch:
   ```bash
   git branch -M main
   git push -u origin main
   ```
6. For future work, use feature branches:
   ```bash
   git checkout -b feature/awesome-feature
   # make changes
   git add .
   git commit -m "Add awesome feature"
   git push -u origin feature/awesome-feature
   ```
   Then open a Pull Request on the hosting platform.

## License
MIT
