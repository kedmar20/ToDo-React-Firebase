import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDGvzywv0Hm_IE6XlAgqURAKo5vNHUN2ls",
   authDomain: "reactfirebase-todolist.firebaseapp.com",
   projectId: "reactfirebase-todolist",
   storageBucket: "reactfirebase-todolist.appspot.com",
   messagingSenderId: "155698486361",
   appId: "1:155698486361:web:199fc2430e5a558e652548",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const storage = getStorage(app);
