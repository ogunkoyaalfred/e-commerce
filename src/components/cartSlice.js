// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Load items from localStorage
const loadItemsFromStorage = () => {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading cart items from localStorage:", error);
    return [];
  }
};

// Save items to localStorage
const saveItemsToStorage = (items) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(items));
  } catch (error) {
    console.error("Error saving cart items to localStorage:", error);
  }
};

const initialState = {
  items: loadItemsFromStorage(),
  isCartOpen: false, // this one resets on refresh (not persisted)
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      saveItemsToStorage(state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveItemsToStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveItemsToStorage(state.items);
    },
    toggleCartState: (state) => {
      state.isCartOpen = !state.isCartOpen; // only affects UI, not saved
    },
  },
});

export const { addItem, removeItem, clearCart, toggleCartState } =
  cartSlice.actions;

export default cartSlice.reducer;
