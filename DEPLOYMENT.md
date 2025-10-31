# Deployment Guide: Publishing Your Portfolio to Vercel

This guide will walk you through deploying your portfolio website so anyone in the world can visit it!

## Prerequisites

Before you start, make sure you have:
- ✅ A GitHub account (free at github.com)
- ✅ A Vercel account (free at vercel.com)
- ✅ Git installed (usually pre-installed on Mac)

---

## Step 1: Prepare Your Code

### 1.1 Initialize Git (if not done)
Open your terminal and run:
```bash
cd /Users/nilekorobkov/portfolio
git init
git add .
git commit -m "Initial portfolio setup"
```

### 1.2 Test Your Build (Optional but Recommended)
First, make sure npm works in your terminal:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

Then test the build:
```bash
npm install
npm run build
```

If this works, you're ready to deploy! The `dist/` folder is what will be deployed.

---

## Step 2: Push to GitHub

### 2.1 Create a New Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it: `portfolio` (or any name you like)
4. Set it to **Public** (free accounts can use public repos)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

### 2.2 Push Your Code to GitHub

GitHub will show you commands. Use these (replace `YOUR_USERNAME` with your GitHub username):

```bash
# Make sure you're in the project folder
cd /Users/nilekorobkov/portfolio

# Add GitHub as remote (replace YOUR_USERNAME with your actual username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push your code
git branch -M main
git push -u origin main
```

**Note:** You'll be prompted for your GitHub username and password. For password, use a **Personal Access Token** (not your account password). See below if needed.

### 2.3 GitHub Personal Access Token (if needed)

If GitHub asks for a password:
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **"Generate new token (classic)"**
3. Name it: `portfolio-deploy`
4. Check `repo` scope
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

---

## Step 3: Deploy to Vercel

### 3.1 Sign Up/Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (or "Log In" if you have an account)
3. Choose **"Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your GitHub account

### 3.2 Create a New Project

1. In Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories. Click **"Import"** next to your `portfolio` repo
3. Vercel will detect it's a Vite project automatically

### 3.3 Configure Build Settings (Usually Auto-Detected)

Vercel should auto-detect these settings, but verify:
- **Framework Preset:** Vite
- **Build Command:** `npm run build` (should be auto-filled)
- **Output Directory:** `dist` (should be auto-filled)
- **Install Command:** `npm install` (should be auto-filled)

### 3.4 Deploy!

1. Click **"Deploy"**
2. Wait 1-2 minutes for the build to complete
3. **🎉 Success!** You'll see a URL like: `https://portfolio-xyz123.vercel.app`

---

## Step 4: Customize Your Domain (Optional)

### 4.1 Use Vercel's Free Domain

Your site is already live at `https://your-project-name.vercel.app` - share this URL!

### 4.2 Add Your Own Domain (Optional)

1. In Vercel dashboard → Your project → **Settings** → **Domains**
2. Enter your domain (e.g., `nilekorobkov.com`)
3. Follow Vercel's instructions to update your DNS settings
4. Wait a few minutes for DNS to propagate

---

## Step 5: Updating Your Site

Every time you make changes:

```bash
# Make your edits to files
# Then commit and push:
git add .
git commit -m "Updated portfolio content"
git push
```

Vercel will **automatically** detect the push and redeploy your site! Usually takes 1-2 minutes.

---

## Troubleshooting

### "npm: command not found"
Open a **new terminal window**, or run:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

### Build fails on Vercel
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### Site works locally but not on Vercel
- Check that `npm run build` works locally first
- Verify all image paths use `/` (absolute paths) not relative paths
- Check browser console for errors

---

## Quick Reference

**Your local dev server:**
```bash
npm run dev
# Visit: http://localhost:5173
```

**Build for production:**
```bash
npm run build
# Output in: dist/
```

**Preview production build:**
```bash
npm run preview
# Visit: http://localhost:4173
```

---

## Next Steps

- ✅ Your site is live!
- 📝 Edit `src/App.tsx` to update content
- 🎨 Customize colors/styling in Tailwind classes
- 🔗 Update social media links in the Contact section
- 📸 Add your real photo to the About section

Happy deploying! 🚀

