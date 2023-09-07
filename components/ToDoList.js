import getDocuments from "@/firebase/firestore/getDocuments";
import React from "react";
import ToDoItem from "./ToDoItem";
import constants from "@/config/constants";

async function ToDoList() {
  const todos = await getDocuments(constants.collection);

  return (
    <div className="flex items-center content-center flex-col border shadow-md rounded-md mx-8 py-3 px-5">
      {todos.length === 0 ? (
        <h1 className="text-gray-700 font-semibold text-lg">
          No todos found. Add one!
        </h1>
      ) : (
        todos.map((todo, index) => {
          return (
            <ToDoItem
              key={index}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
            />
          );
        })
      )}
    </div>
  );
}

export default ToDoList;
