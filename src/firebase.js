import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBchg6UET6cdaI8b3ESiyiGBi_T87R6c3I",
  authDomain: "hinclude3-8b5d5.firebaseapp.com",
  databaseURL: "https://hinclude3-8b5d5-default-rtdb.firebaseio.com",
  projectId: "hinclude3-8b5d5",
  storageBucket: "hinclude3-8b5d5.appspot.com",
  messagingSenderId: "862436314947",
  appId: "1:862436314947:web:faed07e75425f01298e9f6",
  measurementId: "G-7JXGCWEG2B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };