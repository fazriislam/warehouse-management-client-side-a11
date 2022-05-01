// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoyK_6U9SUsvqhnnIB86dDvZkhwl-sOMM",
  authDomain: "warehouse-98797.firebaseapp.com",
  projectId: "warehouse-98797",
  storageBucket: "warehouse-98797.appspot.com",
  messagingSenderId: "892723246643",
  appId: "1:892723246643:web:4fab73c554378f7206d546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;