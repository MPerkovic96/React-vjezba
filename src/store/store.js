import { configureStore, createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: { color: 'red' },
  reducers: {
    toggleColor: (state) => {
      state.color = state.color === 'red' ? 'black' : 'red';
    },
  },
});

export const { toggleColor } = colorSlice.actions;

const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
  },
});

export default store;
