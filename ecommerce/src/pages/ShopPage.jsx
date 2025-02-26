import Header from "../layout/Header";
import Footer from "../layout/Footer";
import data from "../data/data.json";
import ResultsFilter from "../components/ResultsFilter";
import ProductGrid from "../components/ProductGrid";
import LogoCarousel from "../components/LogoCarousel";
import HeaderShopPage from "../layout/HeaderShopPage";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Corrected import

function ShopPage() {
    const { banner } = data.bestSellers;
    return (
        <div>
          <HeaderShopPage/>
          <Header />
          <section>
            {/* BİRİNCİ COMPONENT */}
            <div className="container mx-auto px-4 py-6 pl-64 pr-64">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-[#252b42] text-2xl md:text-3xl font-bold">Shop</h1>

                <div className="flex items-center mt-2 md:mt-0">
                  <Link to="/ProductDetailPage" className="text-[#252b42] text-sm font-medium hover:text-[#23856d]">
                    Home
                  </Link>
                  <ChevronRight className="mx-2 h-4 w-4 text-[#bdbdbd]" />
                  <span className="text-[#bdbdbd] text-sm font-medium">Shop</span>
                </div>
              </div>
            </div>

            {/* İKİNCİ COMPONENT */}
            <div className="flex justify-center items-center gap-4 pt-8 pb-8">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <div key={index} className="relative">
                    <img
                      src={banner.image}
                      alt="Category Banner"
                      className="w-50 h-50 object-cover shadow-md"
                    />
                    <div className="absolute top-2 left-2 text-black font-bold">
                      <h3 className="text-xs uppercase">{banner.category}</h3>
                      <p className="text-[10px] text-gray-500">{banner.itemsCount}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* ÜÇÜNCÜ COMPONENT */}
            <div className="pl-64 pr-64 pb-8">
              <ResultsFilter />
              <ProductGrid />
            </div>
            <LogoCarousel />
          </section>

          <Footer />
        </div>
    );
}

export default ShopPage;
