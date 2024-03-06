import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import Todo from "src/types/todo";


interface TodosState {
  items: Todo[]
}

const todosInitialState: TodosState = {
  items: [
    {
      id: "1",
      name: "Learn JS",
      status: true,
    },
    {
      id: "2",
      name: "Learn React",
      status: true,
    },
    {
      id: "3",
      name: "Learn MongoDB",
      status: true,
    },
    {
      id: "4",
      name: "Learn PHP",
      status: false,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Todo>) {
        state.items.push(action.payload);
      },
      prepare(name: string) {
        const id = nanoid();
        const payload: Todo = { id, name, status: false };
        return { payload };
      },
    },
    updateStatus: (state, action: PayloadAction<{ id: string, newStatus: boolean }>) => {
      const {id, newStatus} = action.payload;
      state.items = state.items.map(item=> {
        if(item.id === id) {
          return {
            ...item,
            status: newStatus
          };
        }
        return item;
      });
     
    }
  },
});

export const { addTodo, updateStatus } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
