# Nile Korobkov – Portfolio Website

A modern, minimal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
Make sure you have Node.js installed. If not, open a new terminal window (to load nvm):

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install --lts
```

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:5173` to see your site locally.

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **React 19** – UI library
- **TypeScript** – Type safety
- **Vite** – Fast build tool
- **Tailwind CSS v4** – Styling

## 📝 Deployment

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step instructions to deploy to Vercel!**

Quick summary:
1. Push code to GitHub
2. Import repo in Vercel
3. Deploy automatically ✨

## 🎨 Customization

Edit `src/App.tsx` to customize:
- Your name, title, and bio
- Project cards (add your real projects)
- Contact links (email, GitHub, LinkedIn)
- Colors and styling (using Tailwind classes)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── App.tsx       # Main app with all sections
│   ├── main.tsx       # React entry point
│   └── index.css      # Global styles (Tailwind)
├── public/            # Static assets
├── index.html         # HTML template
└── package.json       # Dependencies
```

## 🔄 Making Changes

1. Edit files in `src/`
2. Save → Hot reload automatically updates browser
3. Commit changes: `git add . && git commit -m "Description"`
4. Push to GitHub: `git push`
5. Vercel automatically redeploys your site!

---

Built with ❤️ using React + Vite
