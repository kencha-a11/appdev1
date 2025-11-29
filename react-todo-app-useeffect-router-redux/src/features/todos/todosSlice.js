import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk example
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await response.json();
    return data;
  }
);

const initialState = { items: [], status: 'idle' };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => { state.items.push(action.payload) },
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => { state.status = 'loading' })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchTodos.rejected, (state) => { state.status = 'failed' });
  }
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
