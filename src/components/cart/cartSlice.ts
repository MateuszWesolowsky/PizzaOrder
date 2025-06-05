import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { CartItemTypes } from "../../types/types";
import type { RootState } from "../../store";

interface cartState {
  cart: CartItemTypes[];
}

const initialState: cartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //paload newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
      //payload pizzaID
      state.cart = state.cart.filter((el) => el.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      //payload pizzaID
      const item = state.cart.find((el) => el.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((el) => el.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
      if (item?.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

const selectCart = (state: RootState) => state.cart.cart;

export const getCart = selectCart;

export const getUserName = (state: RootState) => state.user.userName;

export const getTotalCartQuantity = createSelector([selectCart], (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0),
);

export const getTotalCartPrice = createSelector([selectCart], (cart) =>
  cart.reduce((sum, item) => sum + item.totalPrice, 0),
);

export const getCurrentQuantityById = (id: number) => (state: RootState) =>
  state.cart.cart.find((el) => el.pizzaId === id)?.quantity ?? 0;
