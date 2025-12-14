# HUMSJ Charity - Deployment Guide

## 🚀 Deployment Preparation Checklist

### Pre-Deployment (Before Going Live)

#### 1. Environment Configuration
- [ ] Copy `.env.example` to `.env.production`
- [ ] Update Firebase credentials for production project
- [ ] Add Chapa API keys (get from https://chapa.co)
- [ ] Add Telebirr merchant ID (get from Telebirr)
- [ ] Set production app URL
- [ ] Verify all environment variables

#### 2. Firebase Setup
- [ ] Create production Firebase project
- [ ] Enable Email/Password authentication
- [ ] Set up Firestore database
- [ ] Configure security rules for production
- [ ] Set up Cloud Storage for images
- [ ] Enable Analytics
- [ ] Add production domain to authorized domains

#### 3. Payment Integration
- [ ] Register with Chapa (https://chapa.co)
- [ ] Get Chapa API keys
- [ ] Register with Telebirr (https://telebirr.com)
- [ ] Get Telebirr merchant credentials
- [ ] Test payment flows in sandbox mode
- [ ] Set up webhook handlers for payment confirmation

#### 4. Security
- [ ] Review Firestore security rules
- [ ] Set up CORS properly
- [ ] Enable HTTPS only
- [ ] Set up rate limiting
- [ ] Configure CSP headers
- [ ] Enable security headers

#### 5. Testing
- [ ] Test authentication (sign in, sign up, logout)
- [ ] Test dark mode on all devices
- [ ] Test responsiveness (mobile, tablet, desktop)
- [ ] Test admin panel (create, edit, delete posts)
- [ ] Test payment integration (all methods)
- [ ] Test on real devices
- [ ] Test on different browsers

#### 6. Performance
- [ ] Run Lighthouse audit
- [ ] Optimize images
- [ ] Minify CSS/JS
- [ ] Enable caching
- [ ] Set up CDN
- [ ] Monitor Core Web Vitals

---

## 📦 Build & Deploy

### Step 1: Build for Production
```bash
npm run build
```
This creates optimized production build in `dist/` folder.

### Step 2: Deploy to Netlify

#### Option A: Using Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### Option B: Using Git Integration
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables in Netlify dashboard
6. Deploy automatically on push

#### Option C: Using Netlify UI
1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Select your repository
4. Configure build settings
5. Deploy

### Step 3: Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

#### Option B: Using Git Integration
1. Go to https://vercel.com
2. Click "New Project"
3. Import GitHub repository
4. Configure project settings
5. Add environment variables
6. Deploy

### Step 4: Custom Domain Setup
1. Purchase domain (e.g., humsj-charity.com)
2. Update DNS records to point to hosting provider
3. Enable HTTPS/SSL certificate
4. Set up www redirect
5. Test domain access

---

## 🔐 Production Security Rules

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read access to blog posts
    match /blog_posts/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // User data - only own data
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Donations - authenticated users only
    match /donations/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

### Environment Variables (Production)
```
VITE_FIREBASE_API_KEY=your_production_key
VITE_FIREBASE_PROJECT_ID=your_production_project
VITE_CHAPA_PUBLIC_KEY=your_chapa_production_key
VITE_TELEBIRR_MERCHANT_ID=your_telebirr_merchant_id
VITE_APP_URL=https://humsj-charity.com
```

---

## 📊 Hosting Options

### Netlify (Recommended)
- **Pros:** Easy setup, free tier, good performance, built-in CI/CD
- **Cons:** Limited free tier
- **Cost:** Free tier or $19+/month
- **Setup:** 5 minutes

### Vercel
- **Pros:** Optimized for Next.js, fast, free tier
- **Cons:** Limited free tier
- **Cost:** Free tier or $20+/month
- **Setup:** 5 minutes

### Firebase Hosting
- **Pros:** Integrated with Firebase, fast CDN
- **Cons:** Limited free tier
- **Cost:** Free tier or pay-as-you-go
- **Setup:** 10 minutes

### Traditional VPS (DigitalOcean, Linode)
- **Pros:** Full control, scalable
- **Cons:** More setup required
- **Cost:** $5-20+/month
- **Setup:** 30+ minutes

---

## 🔄 CI/CD Pipeline

### GitHub Actions (Automatic Deployment)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 📈 Monitoring & Analytics

### Firebase Analytics
- Monitor user engagement
- Track page views
- Analyze user behavior
- Set up custom events

### Sentry (Error Tracking)
```bash
npm install @sentry/react
```

### Google Analytics
Add tracking ID to environment variables and implement tracking.

### Performance Monitoring
- Monitor Core Web Vitals
- Track page load times
- Monitor API response times
- Set up alerts

---

## 🆘 Post-Deployment Checklist

- [ ] Verify site is accessible
- [ ] Test all functionality
- [ ] Check dark mode works
- [ ] Verify payment integration
- [ ] Test admin panel
- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Verify SSL certificate
- [ ] Test on mobile devices
- [ ] Monitor Firebase usage

---

## 📞 Troubleshooting

### Site Not Loading
- Check DNS configuration
- Verify build was successful
- Check environment variables
- Review deployment logs

### Firebase Connection Issues
- Verify API keys are correct
- Check authorized domains
- Review security rules
- Check network requests

### Payment Integration Not Working
- Verify API keys
- Check payment gateway status
- Review webhook configuration
- Test in sandbox mode

### Performance Issues
- Enable caching
- Optimize images
- Use CDN
- Monitor Core Web Vitals

---

## 🎯 Deployment Timeline

| Task | Time | Status |
|------|------|--------|
| Prepare environment | 15 min | ⏳ |
| Configure Firebase | 20 min | ⏳ |
| Set up payments | 30 min | ⏳ |
| Build & test | 15 min | ⏳ |
| Deploy to Netlify | 5 min | ⏳ |
| Configure domain | 10 min | ⏳ |
| Final testing | 20 min | ⏳ |
| **Total** | **~2 hours** | ⏳ |

---

## ✨ Post-Launch

### Week 1
- Monitor error logs
- Check user feedback
- Monitor performance
- Fix any issues

### Week 2-4
- Optimize based on analytics
- Add more features
- Improve SEO
- Expand payment methods

### Month 2+
- Scale infrastructure
- Add more languages
- Implement advanced features
- Grow user base

---

## 📚 Useful Links

- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Chapa API Docs](https://chapa.co/docs)
- [Telebirr API Docs](https://telebirr.com/docs)

---

## 🚀 Ready to Deploy!

Your application is ready for deployment. Follow the steps above to get your HUMSJ Charity website live!

**Questions?** Check the troubleshooting section or review the documentation.
