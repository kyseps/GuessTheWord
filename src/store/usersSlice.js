import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabase/supaBase";

const data = await supabase.from("Users").select("*");
const initialState = {
  users: ["hamid", "saeed"],
};

console.log(data);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state) => {
      state.users;
    },
    removeUser: (state) => {
      state.users.users;
    },
  },
});

export const selectAllUsers = (state) => state.users.users;
export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
