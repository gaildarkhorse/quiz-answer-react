import { createSlice } from '@reduxjs/toolkit';
// 
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    setLow: (state) => {
      state.value = 1
    },
    setHigh: (state) => {
      state.value = 2
    },
    setNone: (state) => {
      state.value = 0
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLow, setHigh, setNone } = counterSlice.actions;

export default counterSlice.reducer;