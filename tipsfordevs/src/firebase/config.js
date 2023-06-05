import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJfFFQ2cVxc07ascuOSsEt3hFTT0LgOF8",
  authDomain: "tips-for-devs-da62f.firebaseapp.com",
  projectId: "tips-for-devs-da62f",
  storageBucket: "tips-for-devs-da62f.appspot.com",
  messagingSenderId: "705555083654",
  appId: "1:705555083654:web:e0321e2c8427e8f3d2fc07"
};

// Iniciar a  Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app)   // A tua DataBase vai ser o que for passado para o firebase e ficara na variavel const db

export {db}

