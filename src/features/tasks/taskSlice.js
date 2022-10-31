import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
    level: 1,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
    level: 2,
  },
  {
    id: "3",
    title: "Task 3",
    description: "Task 3 description",
    completed: false,
    level: 3,
  },
];

//Slice crea el estado que le pasamos al store
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //funciones para actualizar el estado global
    addTask: (state, action) => {
      state.push(action.payload); //añado el objeto del payload al arreglo del estado
      //No afecta inmutabilidad (por rtk)
    },
    deleteTask: (state, action) => {
      const taskToDelete = state.find((task) => task.id === action.payload);
      if (taskToDelete) {
        state.splice(state.indexOf(taskToDelete), 1);
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
    completeTask: (state, action) => {
      const taskToComplete = state.find((task) => task.id === action.payload);
      if (taskToComplete) {
        taskToComplete.completed = !taskToComplete.completed;
      }
    },
  },
});

export const { addTask, deleteTask, editTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
