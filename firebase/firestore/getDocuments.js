"use server";

import firebaseApp from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

const getDocuments = async (name) => {
  const collectionRef = collection(db, name);
  const querySnapshot = await getDocs(collectionRef);

  let result = [];
  querySnapshot.forEach((doc) => {
    result.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  result.sort((a, b) => {
    return a.createdAt > b.createdAt ? 1 : -1;
  });

  return result;
};

export default getDocuments;
