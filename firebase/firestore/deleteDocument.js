"use server";

import firebaseApp from "../config";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

const db = getFirestore(firebaseApp);

const deleteDocument = async (collection, id) => {
  const docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    await deleteDoc(docRef);
    result = true;
    revalidatePath("/");
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default deleteDocument;
