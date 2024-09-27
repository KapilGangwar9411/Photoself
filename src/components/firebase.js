
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB51Z-5P8gI5VhA38MC1qTLciSHcoj7Kds",
  authDomain: "spectrum-ef8ae.firebaseapp.com",
  projectId: "spectrum-ef8ae",
  storageBucket: "spectrum-ef8ae.appspot.com",
  messagingSenderId: "213373491723",
  appId: "1:213373491723:web:52c21c23f8352501f6450e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;

