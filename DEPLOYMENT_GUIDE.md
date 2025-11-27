# 🚀 Deploy Coconet to Firebase - Step by Step Guide

## Quick Start (Recommended)

Just run this single command in your terminal:

```bash
cd /home/shabeer/Desktop/coconetdm
./deploy.sh
```

The script will handle everything automatically!

---

## Manual Steps (If you prefer to do it manually)

### Step 1: Install Firebase CLI

Open a terminal and run:

```bash
sudo npm install -g firebase-tools
```

Enter your password when prompted.

### Step 2: Login to Firebase

```bash
firebase login
```

This will open your browser. Sign in with your Google account.

### Step 3: Create a New Firebase Project

You have two options:

#### Option A: Using Firebase Console (Easier)
1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Enter project name: `coconet-dm` (or any name you prefer)
4. Disable Google Analytics (optional)
5. Click "Create project"

#### Option B: Using CLI
```bash
firebase projects:create coconet-dm
```

### Step 4: Initialize Firebase in Your Project

```bash
cd /home/shabeer/Desktop/coconetdm
firebase init hosting
```

Answer the prompts:
- **Select a project**: Choose the project you just created (`coconet-dm`)
- **Public directory**: `dist`
- **Single-page app**: `Yes`
- **GitHub integration**: `No`
- **Overwrite index.html**: `No`

### Step 5: Build Your Project

```bash
npm run build
```

### Step 6: Deploy!

```bash
firebase deploy
```

---

## After Deployment

Firebase will give you a URL like:
```
https://coconet-dm.web.app
```

or

```
https://coconet-dm.firebaseapp.com
```

---

## Future Deployments

After the initial setup, deploying updates is simple:

```bash
npm run build && firebase deploy
```

Or just run:
```bash
./deploy.sh
```

---

## Troubleshooting

### "Firebase command not found"
Run: `sudo npm install -g firebase-tools`

### "Permission denied: ./deploy.sh"
Run: `chmod +x deploy.sh`

### "Build failed"
Check for errors in your code and run `npm run dev` to test locally first.

### "Authentication error"
Run: `firebase login --reauth`

---

## Custom Domain (Optional)

To use your own domain (like coconet.dm):

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the instructions to verify and connect your domain

---

Your website is ready to go live! 🎉
