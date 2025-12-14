# HUMSJ Charity - Quick Start Guide (5 Minutes)

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies (1 minute)
```bash
npm install
```

### Step 2: Start Dev Server (30 seconds)
```bash
npm run dev
```
Opens at: `http://localhost:5173`

### Step 3: Configure Firebase (3 minutes)

1. Go to: https://console.firebase.google.com
2. Select project: **humsj-charity-sector**
3. Click **Authentication** in left menu
4. Click **Sign-in method** tab
5. Click **Google** provider
6. Click **Enable** toggle
7. Click **Save**
8. Go to **Settings** (gear icon)
9. Add authorized domain: `localhost:5173`
10. Click **Save**

### Step 4: Test It (1 minute)

1. In your browser, click the **lock icon** (bottom-right)
2. Click **"Sign in with Google"**
3. Sign in with your Google account
4. Click **"Add New Post"**
5. Fill in the form:
   - Title: "Test Post"
   - Title (Amharic): "ሙከራ ፖስት"
   - Excerpt: "This is a test"
   - Category: "Charity"
   - Image: `https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?w=400`
6. Click **"Create Post"**
7. See your post appear on the website!

---

## ✅ You're Done!

Your admin panel is now fully functional with:
- ✅ Google authentication
- ✅ Real-time database
- ✅ Blog post management
- ✅ Bilingual support

---

## 📋 Next Steps (Optional)

### To Deploy
```bash
npm run build
# Deploy the 'dist' folder to Netlify/Vercel
```

### To Add More Features
See `ESSENTIAL_CHECKLIST.md` for priority features

### To Understand the Code
See `ARCHITECTURE.md` for system design

---

## 🆘 Troubleshooting

**Google Sign-In not working?**
- Check: Is Google provider enabled in Firebase Console?
- Check: Is `localhost:5173` in authorized domains?

**Can't save posts?**
- Check: Are you signed in?
- Check: Does Firestore database exist?

**Posts not appearing?**
- Check: Did you click "Create Post"?
- Check: Is the form filled correctly?

---

## 📞 Need Help?

1. Check `ESSENTIAL_CHECKLIST.md`
2. Check `FIREBASE_SETUP.md`
3. Check browser console (F12) for errors
4. Check Firebase Console for issues

---

## 🎉 That's It!

Your HUMSJ Charity admin panel is ready to use!
