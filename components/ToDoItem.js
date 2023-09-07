"use client";

import React from "react";
import updateDocument from "@/firebase/firestore/updateDocument";
import { TrashIcon } from "@heroicons/react/24/outline";
import deleteDocument from "@/firebase/firestore/deleteDocument";
import constants from "@/config/constants";

function ToDoItem(props) {
  const handleCheckboxChange = (e) => {
    updateDocument(constants.collection, props.id, {
      isCompleted: e.target.checked,
    });
  };

  const handleDelete = () => {
    deleteDocument(constants.collection, props.id);
  };

  return (
    <div className="flex w-full justify-between items-center py-4 bg-white border-b-2 last:border-b-0 border-gray-700/20">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={props.isCompleted}
          className="h-4 w-4"
          onChange={handleCheckboxChange}
        />
        <h1 className="text-gray-700 font-semibold text-lg">{props.title}</h1>
      </div>
      <button onClick={handleDelete}>
        <TrashIcon className="h-5 w-5 text-gray-700 cursor-pointer" />
      </button>
    </div>
  );
}

export default ToDoItem;
