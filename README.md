# HUMSJ Charity

A modern, production-ready charity website built with React, Firebase, and TailwindCSS.

## 🚀 Features

- **Authentication** - Secure Firebase email/password authentication
- **Admin Panel** - Create, edit, and delete blog posts (admin only)
- **Dark Mode** - Full dark mode support with persistence
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Payment Integration** - Chapa & Telebirr payment support
- **Bilingual** - English & Amharic support
- **Real-time Database** - Firestore for instant updates

## 🛠️ Tech Stack

- React 18
- Firebase (Auth, Firestore, Storage)
- TailwindCSS
- Vite
- TypeScript

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📝 Environment Variables

Copy `.env.example` to `.env.production` and add your Firebase credentials:

```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_PROJECT_ID=your_project
VITE_CHAPA_PUBLIC_KEY=your_chapa_key
VITE_TELEBIRR_MERCHANT_ID=your_merchant_id
```

## 🚀 Deployment

Deploy to Vercel:

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables
4. Deploy

See `PRODUCTION_READY.md` for detailed instructions.

## 📚 Documentation

- `PRODUCTION_READY.md` - Production deployment guide
- `FINAL_SETUP_GUIDE.md` - Quick start guide
- `vercel.json` - Vercel configuration

## 🔐 Security

- Firebase authentication required for admin access
- Firestore security rules configured
- No hardcoded credentials
- HTTPS enforced in production

## 📞 Support

For issues or questions, check the documentation files or review the code comments.