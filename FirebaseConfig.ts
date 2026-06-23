// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsIGCefh0d7T2NoaNc5Uk0a6Wn6q-JSh0",
  authDomain: "fir-expo-31614.firebaseapp.com",
  projectId: "fir-expo-31614",
  storageBucket: "fir-expo-31614.firebasestorage.app",
  messagingSenderId: "716553555935",
  appId: "1:716553555935:web:c4b76a17504dc170f9fe6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(() => null as any),
});



export const db = getFirestore(app);