import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => { state.items.push(action.payload) },
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    }
  }
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
