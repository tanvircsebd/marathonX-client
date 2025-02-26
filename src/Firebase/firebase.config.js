// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAv6Xb7NFsaqAs-EVEhfpwjG9BlzOGjpIk",
//   authDomain: "marathon-b3537.firebaseapp.com",
//   projectId: "marathon-b3537",
//   storageBucket: "marathon-b3537.firebasestorage.app",
//   messagingSenderId: "1006354403181",
//   appId: "1:1006354403181:web:02f2f99cbdf8e077159464"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);