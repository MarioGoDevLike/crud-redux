import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const id = action.payload.id;
      const u = state.find((user) => user.id == id);
      u.name = action.payload.name;
      u.email = action.payload.email;
    },
    deleteUser: (state, action) => {
        const id = action.payload.id;
        const u = state.find((user) => user.id == id);
        if(u){
            return state.filter(user => user.id != id);
        }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
