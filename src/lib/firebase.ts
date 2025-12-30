import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

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
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, analytics, db, storage, auth };
