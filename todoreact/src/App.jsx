import { useState, useEffect } from "react";

import { TodoContextProvider } from "./contexts/index";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    console.log(todo);
    if (todo.description.length > 0) {
      //settodos((prev) => (...prev,{ id: Date.now(),...todo }));
      settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    }
  };

  const updateTodo = (id, todo) => {
    console.log(todo);
    settodos((prevtodos) => {
      console.log(prevtodos);
      return prevtodos.map((oldtodo) => {
        if (oldtodo.id == id) {
          return todo;
        }
        // oldtodo.id === id ? todo : oldtodo
      });
    });
  };

  const removeTodo = (id) => {
    settodos((prev) => prev.filter((prevtodo) => prevtodo.id != id));
  };

  const completeTodo = (id) => {
    settodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos != null && todos.length > 0) {
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, removeTodo, updateTodo, completeTodo }}
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
