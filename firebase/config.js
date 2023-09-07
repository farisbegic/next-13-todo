import constants from "@/config/constants";
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: constants.firebase.apiKey,
  authDomain: constants.firebase.authDomain,
  projectId: constants.firebase.projectId,
  storageBucket: constants.firebase.storageBucket,
  messagingSenderId: constants.firebase.messagingSenderId,
  appId: constants.firebase.firebaseAppId,
};

// Initialize Firebase
let firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;
