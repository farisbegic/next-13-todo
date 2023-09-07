"use server";

import firebaseApp from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

const getDocument = async (collection, id) => {
  const docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      result = docSnap.data();
    } else {
      error = "No such document!";
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default getDocument;
