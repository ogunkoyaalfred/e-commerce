import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/components/cartSlice"; // assuming you have a slice

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;