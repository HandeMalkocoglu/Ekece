import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Kullanılan reducer'ı ekle

const store = configureStore({
  reducer: {
    auth: authReducer, // Auth reducer'ı burada
  },
});

export default store;
