// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmQqrZmxYD_HgagIsQRGpGXOd2Mqxekkg",
  authDomain: "shoping-list-5e86f.firebaseapp.com",
  databaseURL: "https://shoping-list-5e86f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoping-list-5e86f",
  storageBucket: "shoping-list-5e86f.firebasestorage.app",
  messagingSenderId: "1093960320006",
  appId: "1:1093960320006:web:4925d9f99b70e77aceef87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app);
export {db}
export default app