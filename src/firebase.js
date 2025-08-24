// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl5DLGm9mvAJZi84csyrIuWX3E1qyn9fw",
  authDomain: "shopping-list-v1-719e0.firebaseapp.com",
  projectId: "shopping-list-v1-719e0",
  storageBucket: "shopping-list-v1-719e0.firebasestorage.app",
  messagingSenderId: "1028581620467",
  appId: "1:1028581620467:web:8c57395554d12ae4355586",
  measurementId: "G-EHY9XK5S8W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

