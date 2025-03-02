import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../api/axiosInstance";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("2");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    async function fetchRoles() {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
      } catch (error) {
        console.error("Roller yüklenirken hata oluştu:", error);
      }
    }
    fetchRoles();
  }, []);

  const password = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const { confirmPassword, ...payload } = data;

      if (!payload.role_id) {
        alert("Lütfen bir rol seçiniz.");
        return;
      }

      if (payload.role_id === "3") {
        payload.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
      }

      console.log("Gönderilen veri:", payload);

      const response = await api.post("/signup", payload);

      alert("Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!");
      navigate(-1);
    } catch (error) {
      console.error("Sunucu Hata Yanıtı:", error.response?.data);
      alert(`Hata: ${error.response?.data?.message || "Bilinmeyen hata oluştu"}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Kayıt Ol</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block font-medium text-gray-700">Ad</label>
              <input type="text" {...register("name", { required: "Bu alan zorunludur", minLength: 3 })} className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block font-medium text-gray-700">E-posta</label>
              <input type="email" {...register("email", { required: "Bu alan zorunludur", pattern: /^[^@]+@[^@]+\.[^@]+$/ })} className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block font-medium text-gray-700">Şifre</label>
              <input type="password" {...register("password", {
                required: "Bu alan zorunludur",
                minLength: { value: 8, message: "En az 8 karakter olmalı" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message: "Şifre büyük harf, küçük harf, rakam ve özel karakter içermelidir",
                },
              })} className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div>
              <label className="block font-medium text-gray-700">Şifre Doğrula</label>
              <input type="password" {...register("confirmPassword", {
                validate: (value) => value === password || "Şifreler eşleşmiyor",
              })} className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
            <div>
              <label className="block font-medium text-gray-700">Rol</label>
              <select {...register("role_id")} onChange={(e) => setSelectedRole(e.target.value)} className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            {selectedRole === "3" && (
              <>
                <div>
                  <label className="block font-medium text-gray-700">Mağaza Adı</label>
                  <input type="text" {...register("store_name", { required: "Bu alan zorunludur", minLength: 3 })} className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">Telefon</label>
                  <input type="tel" {...register("store_phone", { required: "Bu alan zorunludur", pattern: /^[0-9]{10}$/ })} className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
              </>
            )}
            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300">
              {isSubmitting ? "Gönderiliyor..." : "Kayıt Ol"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
