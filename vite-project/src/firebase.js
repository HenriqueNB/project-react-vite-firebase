import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

  
  const firebaseConfig = {
    apiKey: "AIzaSyDG4VOGdIHnnpCkod_tz6Ssf5xGFXm9dYk",
    authDomain: "projetovite-josehenrique.firebaseapp.com",
    projectId: "projetovite-josehenrique",
    storageBucket: "projetovite-josehenrique.firebasestorage.app",
    messagingSenderId: "337598671062",
    appId: "1:337598671062:web:b6159edd6f9177ff8d8177"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);