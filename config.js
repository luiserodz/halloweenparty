// ===== Ajustes del concurso de disfraces =====

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB7•••••••••••••••••••••••••••••••",
  authDomain: "halloween-party-85bff.firebaseapp.com",
  databaseURL: "https://halloween-party-85bff-default-rtdb.firebaseio.com",
  projectId: "halloween-party-85bff",
  storageBucket: "halloween-party-85bff.firebasestorage.app",
  messagingSenderId: "324012197834",
  appId: "1:324012197834:web:3fde386904378253203133",
};

// Where this party's votes live in the database. Change it to start fresh
// (and update the database rules to match).
export const ROOT = "party2026";

export const TITLE = "Concurso de Disfraces";

// The last category is treated as the grand prize.
export const CATEGORIES = [
  { id: "idea",     name: "Mejor Idea",       emoji: "💡" },
  { id: "makeup",   name: "Mejor Maquillaje", emoji: "💄" },
  { id: "skit",     name: "Mejor Actuación",  emoji: "🎭" },
  { id: "original", name: "Más Original",     emoji: "✨" },
  { id: "overall",  name: "Ganador General",  emoji: "👑" },
];
