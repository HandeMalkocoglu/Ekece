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

      await api.post("/signup", payload);

      alert("Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!");
      navigate("/login");
    } catch (error) {
      console.error("Sunucu Hata Yanıtı:", error.response?.data);
      alert(`Hata: ${error.response?.data?.message || "Bilinmeyen hata oluştu"}`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transition-all hover:scale-[1.02]">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Kayıt Ol</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Ad</label>
              <input type="text" {...register("name", { required: "Bu alan zorunludur", minLength: 3 })} 
                className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">E-posta</label>
              <input type="email" {...register("email", { required: "Bu alan zorunludur", pattern: /^[^@]+@[^@]+\.[^@]+$/ })} 
                className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Şifre</label>
              <input type="password" {...register("password", {
                required: "Bu alan zorunludur",
                minLength: { value: 8, message: "En az 8 karakter olmalı" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message: "Şifre büyük harf, küçük harf, rakam ve özel karakter içermelidir",
                },
              })} className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Şifre Doğrula</label>
              <input type="password" {...register("confirmPassword", {
                validate: (value) => value === password || "Şifreler eşleşmiyor",
              })} className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Rol</label>
              <select {...register("role_id")} onChange={(e) => setSelectedRole(e.target.value)} 
                className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" disabled={isSubmitting} 
              className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300"
            >
              {isSubmitting ? "Gönderiliyor..." : "Kayıt Ol"}
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600">Zaten bir hesabınız var mı?</p>
            <button
              onClick={() => navigate("/login")}
              className="mt-2 bg-gray-800 text-white px-5 py-2 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300"
            >
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
