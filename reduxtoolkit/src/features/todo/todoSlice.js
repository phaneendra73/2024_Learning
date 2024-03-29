import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, description: "hello world", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload, "add payload");

      const todo = {
        id: nanoid(),

        description: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      console.log(action.payload, "remove payload");
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      const todoToEdit = state.todos.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.completed = !todoToEdit.completed;
      }
    },
  },
});

export const { addTodo, removetodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
