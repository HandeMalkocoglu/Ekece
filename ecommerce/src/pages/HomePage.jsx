import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PageContent from "../layout/PageContent";
import data from "../data/data.json";
import BestSeller from "../components/BestSeller";
import MostPopular from "../components/MostPopular";
import BestSellerProducts from "../components/BestSellerProducts";
import MostPopularProducts from "../components/MostPopularProducts";
import BestSellerProductCard from "../components/BestSellerProductCard";
import LogoCarousel from "../components/LogoCarousel";
import FeaturedPosts from "../components/FeaturedPosts";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HomePage() {
  const { hero } = data;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = hero.backgroundImages; // data.json içinde bir dizi olarak tanımlayın

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Header />
      <section
  className="relative h-[700px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
  style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
>
  {/* Sol Ok */}
  <button
    onClick={handlePrevImage}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white text-gray-800 rounded-full shadow cursor-pointer"
  >
    <ChevronLeft size={24} />
  </button>

  {/* İçerik */}
  <div className="bg-opacity-50 p-6 rounded-lg">
    <h2 className="text-6xl font-bold">{hero.title}</h2>
    <p className="max-w-xl mt-2 text-[20px] font-normal leading-[30px] tracking-[0.4px]">
      {hero.description}
    </p>
    <button className="mt-4 bg-[#23A6F0] hover:bg-blue-500 px-6 py-3 rounded">
      {hero.buttonText}
    </button>
  </div>

  {/* Sağ Ok */}
  <button
    onClick={handleNextImage}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white text-gray-800 rounded-full shadow cursor-pointer"
  >
    <ChevronRight size={24} />
  </button>

  {/* Görsel Göstergeleri */}
<div className="absolute bottom-6 flex justify-center space-x-2">
  {backgroundImages.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentImageIndex(index)}
      className={`w-16 h-1 rounded-full transition-all ${
        currentImageIndex === index ? "bg-white w-5" : "bg-white opacity-50"
      }`}
    />
  ))}
</div>

</section>


      <PageContent />
      <BestSeller />
      <MostPopular />
      <BestSellerProducts />
      <MostPopularProducts />
      <BestSellerProductCard />
      <LogoCarousel />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}

export default HomePage;