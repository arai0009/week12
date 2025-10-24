// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// TEMP: quick sanity check
if (!cfg.apiKey) {
  console.error('Firebase API key is missing. Check .env and restart dev server.')
}
console.log('Firebase key starts with:', (cfg.apiKey || '').slice(0, 6))

const app = initializeApp(cfg)
export const auth = getAuth(app)
