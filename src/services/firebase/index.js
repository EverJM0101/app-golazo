import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKnY44jf6Jnfqd845A0QsE10QM5AotSA8",
  authDomain: "golazo-app-7866d.firebaseapp.com",
  projectId: "golazo-app-7866d",
  storageBucket: "golazo-app-7866d.appspot.com",
  messagingSenderId: "432215980426",
  appId: "1:432215980426:web:3fe8e456f81202e5ad3073",
  measurementId: "G-R7DZ382XL9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);