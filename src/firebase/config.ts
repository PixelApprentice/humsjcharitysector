import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNDG3z3EHIy9lNYuu_5c8MUo61__0KHc4",
  authDomain: "humsj-charity-sector.firebaseapp.com",
  projectId: "humsj-charity-sector",
  storageBucket: "humsj-charity-sector.firebasestorage.app",
  messagingSenderId: "400609252606",
  appId: "1:400609252606:web:7e958f80b8f4b3824341af",
  measurementId: "G-KFZ73GPRJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

// Configure Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export default app;
