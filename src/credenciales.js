// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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