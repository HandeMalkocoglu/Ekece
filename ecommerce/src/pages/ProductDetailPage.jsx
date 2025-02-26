import Header from "../layout/Header";
import Footer from "../layout/Footer";
import LogoCarousel from "../components/LogoCarousel";
import HeaderShopPage from "../layout/HeaderShopPage";


function ProductDetailPage() {

    return (
        <div>
          <HeaderShopPage/>
          <Header />
          <section>
            
          <LogoCarousel/>
          </section>
          
          <Footer />
        </div>
      );
    };
    export default ProductDetailPage;