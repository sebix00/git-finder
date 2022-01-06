import { createSlice } from "@reduxjs/toolkit";

const initialInput = {
  input: "",
  btnIsClicked: false,
  name: "",
  users: [],
};

const inputSlice = createSlice({
  name: "userInput",
  initialState: initialInput,
  reducers: {
    inputHandler(state, action) {
      state.input = action.payload;
    },
    btnHandler(state) {
      state.btnIsClicked = true;
    },
    nameHanler(state, action) {
      state.name = action.payload;
    },
    userHandler(state, action) {
      state.users = action.payload;
    },
  },
});

export const inputAction = inputSlice.actions;
export default inputSlice.reducer;
