import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",

  initialState: {
    items: []
  },

  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(
        i => i.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        i => i.id === action.payload.id
      );

      if (item) {
        item.quantity = action.payload.quantity;

        if (item.quantity <= 0) {
          state.items = state.items.filter(
            i => i.id !== item.id
          );
        }
      }
    }
  }
});

export const {
  addItem,
  removeItem,
  updateQuantity
} = CartSlice.actions;

export default CartSlice.reducer;
