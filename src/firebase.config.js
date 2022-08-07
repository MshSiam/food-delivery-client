import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD_Zvqgf3GyZXZztlw9rzn_ILwiYPTxR_c",
  authDomain: "hot-onion-cd59d.firebaseapp.com",
  databaseURL: "https://hot-onion-cd59d-default-rtdb.firebaseio.com",
  projectId: "hot-onion-cd59d",
  storageBucket: "hot-onion-cd59d.appspot.com",
  messagingSenderId: "776889407380",
  appId: "1:776889407380:web:0a49f31b307ed4a791e181"
}

const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig)
const fireStore = getFirestore(app)
const storage = getStorage(app)

export { app, fireStore, storage }
