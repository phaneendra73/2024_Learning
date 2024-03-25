import { useTodo } from "../contexts/index";
import { useState } from "react";
function TodoForm() {
  const [tododes, settododes] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    addTodo({ description: tododes, complete: false });
    settododes("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={tododes}
        onChange={(e) => settododes(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
