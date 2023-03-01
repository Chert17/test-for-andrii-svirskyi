import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "./todo.interface";

type TypeTodoState = {
  todos: ITodo[];
};

const initialState: TypeTodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(
      state,
      action: PayloadAction<{ title: string; description: string }>
    ) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        description: action.payload.description,
        status: false,
      });
    },

    toggleStatus(state, action: PayloadAction<string>) {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);

      if (toggleTodo) toggleTodo.status = !toggleTodo.status;
    },
  },
});

export const { addTodo, toggleStatus } = todoSlice.actions;

export default todoSlice.reducer;
