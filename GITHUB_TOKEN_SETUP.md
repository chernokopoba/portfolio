# GitHub Personal Access Token Setup

GitHub no longer accepts passwords for git operations. You need a Personal Access Token.

## Quick Steps

### 1. Create Token on GitHub

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `portfolio-deploy`
4. Set expiration: **90 days** (or longer if you want)
5. Check the **`repo`** scope (this gives full access to repositories)
6. Scroll down and click **"Generate token"**
7. **⚠️ IMPORTANT:** Copy the token NOW (you'll see something like `ghp_xxxxxxxxxxxxxxxxxxxx`). You won't be able to see it again!

### 2. Use Token When Pushing

When git asks for password, paste the token instead of your password.

**Username:** Your GitHub username  
**Password:** Paste the token you just copied

### 3. Save Token (Optional but Recommended)

If you want to avoid entering it every time, you can save it:

```bash
# This saves your credentials (Mac uses Keychain)
git config --global credential.helper osxkeychain
```

After entering the token once, it will be saved and you won't need to enter it again.

---

## Alternative: Use SSH Instead

If you prefer, you can use SSH keys instead of tokens:

1. Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter to accept default location
# Press Enter for no passphrase (or create one if you want)
```

2. Add to GitHub:
```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
# Copy the output, then go to GitHub → Settings → SSH and GPG keys → New SSH key
# Paste and save
```

3. Change remote URL:
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/portfolio.git
```

Then you can push without any password/token!

