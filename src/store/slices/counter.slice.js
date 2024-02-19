import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      return { count: state.count + 1 };
    },
  },
});

export default counterSlice;
export const { increment } = counterSlice.actions;
