import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counterSlice';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    counter,
    filter
  },
});
