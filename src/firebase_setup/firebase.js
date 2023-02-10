// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh84kFG7oBoVzYtflkPH0tO2sI2HtuIL8",
  authDomain: "learn-algorithms-md.firebaseapp.com",
  projectId: "learn-algorithms-md",
  storageBucket: "learn-algorithms-md.appspot.com",
  messagingSenderId: "1035034052791",
  appId: "1:1035034052791:web:f0b9eef9b003120cf06532",
  measurementId: "G-J6B7QGLP4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app, "gs://learn-algorithms-md.appspot.com")

export default storage