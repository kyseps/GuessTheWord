import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import usersReducer from "../slices/usersSlice";

export const store = configureStore({
  reducer: { users: usersReducer },
});
