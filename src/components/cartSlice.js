// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isCartOpen : false,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
    toggleCartState: (state) => {
        state.isCartOpen = !state.isCartOpen
    }
  },
});

export const { addItem, removeItem, clearCart, toggleCartState } = cartSlice.actions;

export default cartSlice.reducer;
