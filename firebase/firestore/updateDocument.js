"use server";

import firebaseApp from "../config";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

const db = getFirestore(firebaseApp);

const updateDocument = async (collection, id, data) => {
  const docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    await updateDoc(docRef, data);
    result = data;
    revalidatePath("/");
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default updateDocument;
