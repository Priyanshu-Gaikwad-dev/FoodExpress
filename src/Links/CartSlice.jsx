import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        clearCart(state, action) {
            state.items.length = 0;
        },
       // In your CartSlice
addItem: (state, action) => {
    const item = action.payload;
    const existingItem = state.items.find(
      (i) => i.card.info.id === item.card.info.id
    );
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      state.items.push({ ...item, quantity: 1 });
    }
  },
  removeItem: (state, action) => {
    const item = action.payload;
    const existingItem = state.items.find(
      (i) => i.card.info.id === item.card.info.id
    );
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (i) => i.card.info.id !== item.card.info.id
        );
      }
    }
  },
  clearItem: (state, action) => {
    const item = action.payload;
    state.items = state.items.filter(
      (i) => i.card.info.id !== item.card.info.id
    );
  },
}
});

export const {addItem, removeItem, clearCart, clearItem} = cartSlice.actions;

export default cartSlice.reducer;