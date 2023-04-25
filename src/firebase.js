import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDS_FE6ZquwwQ43qDWyfhT9o2ItpTfaqH4",
    authDomain: "netflix-clone-3ac5f.firebaseapp.com",
    projectId: "netflix-clone-3ac5f",
    storageBucket: "netflix-clone-3ac5f.appspot.com",
    messagingSenderId: "374641786368",
    appId: "1:374641786368:web:4214477dad730ddce122e5",
    measurementId: "G-XGXNCG3P1B"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);
  const auth = getAuth(app)

  export {auth}
  export default db