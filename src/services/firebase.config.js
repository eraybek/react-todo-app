import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyrCR__5Xt_K6JZMcqiJOd6YlUdBQqmvw",
    authDomain: "todoapp-c47c6.firebaseapp.com",
    projectId: "todoapp-c47c6",
    storageBucket: "todoapp-c47c6.appspot.com",
    messagingSenderId: "1041803657086",
    appId: "1:1041803657086:web:75d6f02b4bae58ee6f3d2f",
    measurementId: "G-T0E73W8T7N"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);