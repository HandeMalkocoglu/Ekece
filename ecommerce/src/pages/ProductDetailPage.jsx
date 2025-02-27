import Header from "../layout/Header";
import Footer from "../layout/Footer";
import LogoCarousel from "../components/LogoCarousel";
import HeaderShopPage from "../layout/HeaderShopPage";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Corrected import
import ProductDetail from "../components/ProductDetail";
import ProductTabs from "../components/ProductTab";
import BestSellerProductCard from "../components/BestSellerProductCard";

function ProductDetailPage() {

    return (
        <div>
          <HeaderShopPage/>
          <Header />
          <section>
            {/* BİRİNCİ COMPONENT */}
            <div className="container mx-auto px-4 py-6 pl-64 pr-64">
              <div className="flex flex-row md:flex-row items-start">
                  <Link to="/Shop" className="text-[#bdbdbd] text-sm font-medium hover:text-[#23856d]">
                    Home
                  </Link>
                  <ChevronRight className="mx-2 h-4 w-4 text-[#252b42]" />
                  <span className="text-[#252b42] text-sm font-medium">Shop</span>
              </div>
            </div>
          <ProductDetail/>
          <ProductTabs/>
          <BestSellerProductCard/>
          <LogoCarousel/>
          </section>
          
          <Footer />
        </div>
      );
    };
    export default ProductDetailPage;