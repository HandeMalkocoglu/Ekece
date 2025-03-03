import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../api/authActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      toast.success("Başarıyla giriş yaptınız!");
      navigate("/dashboard"); // Kullanıcıyı dashboard'a yönlendir
    }
  }, [user, navigate]);

  const onSubmit = async (data) => {
    console.log("Gönderilen form verisi:", data); // Gelen veriyi kontrol et
    
    try {
      const response = await dispatch(loginUser(data)).unwrap();
      console.log("Giriş başarılı, kullanıcı:", response);
  
      if (data.rememberMe) {
        localStorage.setItem("token", response.token);
        console.log("Token kaydedildi 🎉", response.token);
      } else {
        localStorage.removeItem("token"); // Beni hatırla seçili değilse temizle
        console.log("Token silindi ❌");
      }
  
      toast.success("Giriş başarılı!");
      navigate("/"); // Ana sayfaya yönlendir
  
    } catch (err) {
      console.error("Giriş hatası:", err);
      toast.error(err?.message || "Giriş başarısız, tekrar deneyin.");
    }
  };
  
  
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Giriş Yap</h2>

        {/* Redux error mesajını güvenli şekilde göster */}
        {error && (
          <p className="text-red-500 text-center">
            {typeof error === "string" ? error : error.message || "Bir hata oluştu"}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">E-posta</label>
            <input
              type="email"
              {...register("email", { required: "E-posta zorunludur" })}
              className="border rounded w-full p-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Şifre</label>
            <input
              type="password"
              {...register("password", { required: "Şifre zorunludur" })}
              className="border rounded w-full p-2"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="flex items-center">
            <input type="checkbox" {...register("rememberMe")} className="mr-2" />
            <label>Beni Hatırla</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}
