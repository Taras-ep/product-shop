import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice.tsx';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
})

export default store

export type ProductRootState = ReturnType<typeof store.getState>