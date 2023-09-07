"use client";

import React, { useState } from "react";
import addDocument from "@/firebase/firestore/addDocument";
import constants from "@/config/constants";

function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleAddTask = (e) => {
    const title = e.get("title")?.toString();

    if (title) {
      addDocument(constants.collection, {
        title: title,
        isCompleted: false,
      });
    }

    handleClick();
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white">
      <div className="flex items-center">
        <h1 className="text-gray-700 font-semibold text-lg">ToDo App</h1>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        onClick={handleClick}
      >
        Create Task
      </button>

      {clicked && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white rounded-md p-8">
            <h1 className="text-gray-700 font-semibold text-lg">Create Task</h1>
            <form action={handleAddTask}>
              <input
                type="text"
                name="title"
                className="border rounded-md p-2 w-full mt-4"
              />
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-4">
                  Create
                </button>
                <button
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded mt-4"
                  onClick={handleClick}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
