import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/user/userSlice";
import cartReducer from "./components/cart/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
