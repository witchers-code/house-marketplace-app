// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEU9ukM3OKc7yiTx2I7w3QL7CujhI2lKw",
  authDomain: "house-marketplace-292dc.firebaseapp.com",
  projectId: "house-marketplace-292dc",
  storageBucket: "house-marketplace-292dc.appspot.com",
  messagingSenderId: "95521995753",
  appId: "1:95521995753:web:aab2cc470a6a81662de978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();