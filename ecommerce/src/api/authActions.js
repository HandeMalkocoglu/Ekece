import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./axiosInstance";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", { email, password });

      // Kullanıcı bilgilerini al
      const userData = response.data;

      // Eğer "Beni Hatırla" seçiliyse token'ı localStorage'a kaydet
      if (rememberMe) {
        localStorage.setItem("token", userData.token);
      }

      return userData;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Giriş başarısız!");
    }
  }
);
