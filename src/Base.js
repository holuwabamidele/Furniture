import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyDLfENG0WjMKv0aDDgvGHPE6_LBSwuGVuE",
  authDomain: "furniture-57d9a.firebaseapp.com",
  projectId: "furniture-57d9a",
  storageBucket: "furniture-57d9a.appspot.com",
  messagingSenderId: "98620094826",
  appId: "1:98620094826:web:0c0512afe4452043028d13",
});

const basedb = getFirestore(app);
const baseStorage = getStorage(app);
export { basedb, baseStorage };
