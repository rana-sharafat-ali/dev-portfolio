# 🚀 Deployment Guide: GitHub Pages

Follow these steps to get your portfolio live on the web!

## 1. Create a GitHub Repository
1. Go to [GitHub](https://github.com/new).
2. Create a new repository (e.g., `portfolio`).
3. **Do not** initialize it with a README or .gitignore.

## 2. Initialize Git Locally
Run these commands in your project terminal:
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```
> [!IMPORTANT]
> Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details.

## 3. Configure the Project
I have already updated these files with placeholders. Please open them and replace the placeholders:
1. **[vite.config.js](file:///c:/Users/Mughal%20laptop/Desktop/portfolio%20update/vite.config.js)**: Change `base` to `"/your-repo-name/"`.
2. **[package.json](file:///c:/Users/Mughal%20laptop/Desktop/portfolio%20update/package.json)**: Change `homepage` to `"https://your-username.github.io/your-repo-name"`.

## 4. Deploy!
Once configured, run this single command:
```bash
npm run deploy
```

## 5. Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages**.
3. Under **Branch**, ensure it is set to `gh-pages` and `/ (root)`.
4. Your site will be live at `https://your-username.github.io/your-repo-name`!
