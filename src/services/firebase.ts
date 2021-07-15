import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAxSP-DDXFreSv5Pdchk6kuBLOJiGG2R_k",
  authDomain: "letmeask-daniel21h.firebaseapp.com",
  databaseURL: "https://letmeask-daniel21h-default-rtdb.firebaseio.com",
  projectId: "letmeask-daniel21h",
  storageBucket: "letmeask-daniel21h.appspot.com",
  messagingSenderId: "746916737101",
  appId: "1:746916737101:web:744f0a002a87f238a6ec04"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();