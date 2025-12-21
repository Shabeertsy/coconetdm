# Coconet - Next.js Migration

This project has been migrated from Vite to **Next.js 16** for improved SEO and performance.

## 🚀 What Changed

### Migration Benefits
- ✅ **Better SEO**: Server-side rendering and static generation
- ✅ **Automatic Code Splitting**: Faster page loads
- ✅ **Built-in Image Optimization**: Better performance
- ✅ **File-based Routing**: Simpler navigation structure
- ✅ **API Routes**: Backend capabilities without separate server
- ✅ **Metadata API**: Easy SEO management per page

### Project Structure
```
coconetdm/
├── app/                    # Next.js App Router
│   ├── layout.jsx         # Root layout with SEO metadata
│   ├── page.jsx           # Home page
│   ├── login/             # Login page route
│   ├── sitemap.js         # Auto-generated sitemap
│   ├── robots.js          # Robots.txt configuration
│   └── manifest.js        # PWA manifest
├── src/
│   ├── components/        # React components (unchanged)
│   ├── context/           # React context (updated for Next.js)
│   └── index.css          # Global styles
├── public/                # Static assets
└── next.config.mjs        # Next.js configuration
```

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 📊 SEO Features

### Metadata
Each page now has comprehensive metadata including:
- Title and description
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Robots directives

### Sitemap
Automatically generated at `/sitemap.xml`

### Robots.txt
Automatically generated at `/robots.txt`

### Structured Data
Ready for JSON-LD implementation

## 🎨 Components

All existing components have been preserved and updated for Next.js:
- **Client Components**: Components using hooks now have `'use client'` directive
- **Server Components**: Static components render on the server by default
- **Navigation**: Updated from React Router to Next.js Link and navigation

## 🔧 Configuration

### Update Your Domain
Update the following files with your actual domain:
1. `app/layout.jsx` - Update `metadataBase`
2. `app/sitemap.js` - Update `baseUrl`
3. `app/robots.js` - Update sitemap URL

### Firebase Hosting (Optional)
To deploy to Firebase, update `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true,
  },
};
```

Then build and deploy:
```bash
npm run build
firebase deploy
```

## 📝 Notes

- The original Vite setup has been backed up in `.backup/`
- All existing functionality has been preserved
- Styling remains unchanged
- Firebase deployment configuration is compatible

## 🆘 Troubleshooting

### Port Already in Use
If port 3000 is in use, Next.js will automatically try 3001, 3002, etc.

### Build Errors
Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)
- [App Router](https://nextjs.org/docs/app)
