import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const found = state.items.find(item => item.id === action.payload.id);
      if (found) found.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const found = state.items.find(item => item.id === action.payload.id);
      if (found) {
        found.quantity = action.payload.quantity;
        if (found.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
