import { configureStore } from "@reduxjs/toolkit";
import todosSlicer from "../features/todos/todosSlicer";
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
