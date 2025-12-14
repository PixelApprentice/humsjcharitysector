# Email/Password Authentication Setup

## 🔐 Firebase Authentication Configuration

### Step 1: Enable Email/Password Authentication in Firebase Console

1. Go to https://console.firebase.google.com
2. Select project: **humsj-charity-sector**
3. Click **Authentication** in left menu
4. Click **Sign-in method** tab
5. Click **Email/Password** provider
6. Toggle **Enable** switch
7. Click **Save**

### Step 2: Create Demo Admin Account

1. In Firebase Console, go to **Authentication** → **Users** tab
2. Click **Add user**
3. Enter:
   - Email: `admin@humsj.com`
   - Password: `password123`
4. Click **Add user**

### Step 3: Test Login

1. Run `npm run dev`
2. Click lock icon (bottom-right)
3. Enter credentials:
   - Email: `admin@humsj.com`
   - Password: `password123`
4. Click **Sign In**
5. You should see the admin panel

### Step 4: Create Your Own Account

1. In the login modal, click **"Don't have an account? Create one"**
2. Enter your email and password (min 6 characters)
3. Click **Create Account**
4. You'll be logged in automatically

---

## 🔒 Security Features

✅ **Email/Password Authentication** - Secure Firebase Auth
✅ **Password Validation** - Minimum 6 characters
✅ **Error Messages** - Clear feedback on login failures
✅ **Show/Hide Password** - Toggle visibility
✅ **Session Persistence** - Firebase handles token management
✅ **Logout Functionality** - Clear session on logout

---

## 📝 Login Features

### Sign In
- Email input with validation
- Password input with show/hide toggle
- Error messages for failed attempts
- Loading state during authentication
- Demo credentials hint

### Sign Up
- Create new account with email/password
- Password validation (min 6 characters)
- Auto-login after account creation
- Switch between sign in/sign up modes

---

## 🚀 What Changed

### Before
- Google OAuth only
- No email/password option
- Limited authentication methods

### After
- Email/Password authentication
- Sign up capability
- Password visibility toggle
- Better error handling
- Demo account provided
- Persistent sessions

---

## 🆘 Troubleshooting

### "Invalid email"
- Check email format (must be valid email)
- Use format: `name@example.com`

### "Password should be at least 6 characters"
- Password must be 6+ characters
- Use strong passwords for security

### "User not found" or "Wrong password"
- Check email is correct
- Check password is correct
- Create account if you don't have one

### "Email already in use"
- This email already has an account
- Use sign in instead
- Or use a different email

---

## 📊 User Management

### Add More Admin Users

1. Go to Firebase Console
2. Authentication → Users
3. Click **Add user**
4. Enter email and password
5. Click **Add user**

### Reset Password

1. In login modal, enter email
2. Click **"Forgot password?"** (if implemented)
3. Or manually reset in Firebase Console:
   - Authentication → Users
   - Click user
   - Click **Reset password**

### Delete User

1. Go to Firebase Console
2. Authentication → Users
3. Click user
4. Click **Delete user**

---

## 🔑 Demo Credentials

**Email:** `admin@humsj.com`
**Password:** `password123`

Use these to test the admin panel functionality.

---

## ✨ Next Steps

1. ✅ Enable Email/Password in Firebase Console
2. ✅ Create demo account
3. ✅ Test login with demo credentials
4. ✅ Create your own account
5. ✅ Test admin panel functionality
6. ✅ Add more users as needed

---

## 📞 Support

If you encounter issues:
1. Check Firebase Console settings
2. Verify email/password provider is enabled
3. Check browser console for errors
4. Verify user exists in Firebase Users list
