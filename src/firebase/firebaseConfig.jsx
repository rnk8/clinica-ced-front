import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrKjXcds-C2bLSLZ8wANENf-lIkFi2guY",
  authDomain: "clinicaced-90aa2.firebaseapp.com",
  projectId: "clinicaced-90aa2",
  storageBucket: "clinicaced-90aa2.appspot.com",
  messagingSenderId: "162450202686",
  appId: "1:162450202686:web:c981b5b10378baf370f16f"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const Auth = getAuth(app);
