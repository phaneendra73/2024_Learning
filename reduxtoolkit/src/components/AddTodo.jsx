import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removetodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [editingTodo, setEditingTodo] = useState(null); // State to store editing todo item
  const [input, setInput] = useState("");
  const [button, setbut] = useState("Add Todo");
  const dispatch = useDispatch();
  const editModeTodo = useSelector((state) =>
    state.todos.find((todo) => todo.completed === true)
  );

  useEffect(() => {
    if (editModeTodo) {
      console.log(editModeTodo);
      setInput(editModeTodo.description); // Fix typo: "description" instead of "decription"
      setEditingTodo(editModeTodo); // Store editing todo item
      setbut("Update");
      dispatch(removetodo(editModeTodo.id));
    }
  }, [editModeTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 mt-12 flex justify-center"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
