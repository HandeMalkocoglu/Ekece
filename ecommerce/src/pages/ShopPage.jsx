import Header from "../layout/Header";
import Footer from "../layout/Footer";
import data from "../data/data.json";
import ResultsFilter from "../components/ResultsFilter";
import ProductGrid from "../components/ProductGrid";
import LogoCarousel from "../components/LogoCarousel";


function ShopPage() {
    const { banner } = data.bestSellers;
    return (
        <div>

          <Header />
          <section>
            {/* BİRİNCİ COMPONENT */}
            <div>
            <h1 className="pl-156 pr-156 text-lg font-bold">Shop</h1>
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
          className="w-50 h-50 object-cover  shadow-md"
        />
        <div className="absolute top-2 left-2 text-black font-bold">
          <h3 className="text-xs uppercase">{banner.category}</h3>
          <p className="text-[10px] text-gray-500">{banner.itemsCount}</p>
        </div>
      </div>
    ))}
</div>
          {/*ÜÇÜNCÜ COMPONENT*/}
          <div className="pl-64 pr-64 pb-8">
          <ResultsFilter/>
          <ProductGrid/>
          </div>
          <LogoCarousel/>
          </section>
          
          <Footer />
        </div>
      );
    };
    export default ShopPage;