"use server";

import firebaseApp from "../config";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

const db = getFirestore(firebaseApp);

const addDocument = async (name, data) => {
  const docRef = collection(db, name);

  data.createdAt = new Date().toISOString();

  let result = null;
  let error = null;

  try {
    await addDoc(docRef, data);
    result = data;
    revalidatePath("/");
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default addDocument;
