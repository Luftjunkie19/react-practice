import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeuStH_qIAyAa6Lt9TIiTcJ7ghVhZ9vdc",
  authDomain: "fir-practice-d13c8.firebaseapp.com",
  projectId: "fir-practice-d13c8",
  storageBucket: "fir-practice-d13c8.appspot.com",
  messagingSenderId: "47032114778",
  appId: "1:47032114778:web:fa7b990ce5d6c512c24263",
  measurementId: "G-5NXNHY63RD",
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
