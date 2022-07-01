// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAkpIibUaZ6A6QuwTAkwSFxuzXr5TVxno",
  authDomain: "project-base-for-hackathon.firebaseapp.com",
  projectId: "project-base-for-hackathon",
  storageBucket: "project-base-for-hackathon.appspot.com",
  messagingSenderId: "672499651471",
  appId: "1:672499651471:web:282a47885ff391455071fa",
  measurementId: "G-7B3EFRBKJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;