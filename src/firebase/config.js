// src/firebase/config.js

/**
 * config.example.js — TEMPLATE for your Firebase project settings
 * ---------------------------------------------------------------------------
 * HOW TO USE THIS FILE
 *   1. Copy it to `config.js` in this same folder (src/firebase/config.js).
 *   2. Replace every YOUR_... value with the values from your Firebase project.
 * `config.js` is listed in .gitignore, so your own project's values are never
 * committed. Only this template, with placeholders, is in the repository.
 *
 * This object tells the Firebase SDK WHICH project to talk to.
 * Where to find it: Firebase console → Project settings → General →
 * Your apps → SDK setup and configuration → Config.
 *
 * Are these secret? No. Every web app ships its config to the browser, so
 * anyone can read it with DevTools. What actually protects your data is the
 * security rules (firestore.rules and database.rules.json), which run on
 * Google's servers and decide who may read or write what.
 *
 * `export` makes this value available to other files with `import`.
 * That is how ES modules share code between files.
 */
const firebaseConfig = {
  apiKey: "AIzaSyAXmFufaVeDZRVKGUCb6frvoQT9h2gp7Q",
  authDomain: "personal-portfolio---mu.firebaseapp.com",
  projectId: "personal-portfolio---mu",
  storageBucket: "personal-portfolio---mu.firebasestorage.app",
  messagingSenderId: "53663575659",
  appId: "1:53663575659:web:2f55d7ef02405172070b2e",

  // OPTIONAL: Realtime Database URL. It is only used for the "who's online"
  // presence feature. Leave it empty and the rest of the app still works.
  // You get this URL after you create a Realtime Database in the console
  // (Build → Realtime Database → Create database). It looks like:
  //   https://<project-id>-default-rtdb.firebaseio.com             (US)
  //   https://<project-id>-default-rtdb.<region>.firebasedatabase.app (elsewhere)
  databaseURL: ""
};

// The keys the app cannot run without. databaseURL is deliberately missing
// from this list because presence is an optional feature.
const REQUIRED_KEYS = ['apiKey', 'authDomain', 'projectId', 'appId'];

/**
 * Returns true when the required keys have real values (not the YOUR_...
 * placeholders). main.js calls this before loading Firebase, so a beginner
 * who forgot to paste their config sees a friendly message instead of a
 * confusing SDK error.
 */
export function isConfigured() {
  return REQUIRED_KEYS.every((key) => {
    const value = firebaseConfig[key];
    return typeof value === 'string' && value.length > 0 && !value.includes('YOUR_');
  });
}

/** True when a Realtime Database URL has been filled in. */
export function hasRealtimeDatabase() {
  return typeof firebaseConfig.databaseURL === 'string' && firebaseConfig.databaseURL.startsWith('https://');
}
