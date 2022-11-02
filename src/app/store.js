import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";
import userReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: userReducer,
  },
});
