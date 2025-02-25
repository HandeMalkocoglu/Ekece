import Header from "../layout/Header";
import Footer from "../layout/Footer";
import data from "../data/data.json";
import ResultsFilter from "../components/ResultsFilter";
import { useState, useEffect } from "react";

function ShopPage() {
    const { banner } = data.bestSellers;
    const { categories, products} = data.bestSellers;
    const [selectedIndex, setSelectedIndex] = useState(0);
      const [filteredProducts, setFilteredProducts] = useState([]);
      // Seçili kategoriyi al
      const selectedCategory = categories[selectedIndex];
      // Kategori değiştiğinde ürünleri filtrele
      useEffect(() => {
        setFilteredProducts([]);
        setTimeout(() => {
          const newProducts = products.filter(
            (product) => product.category === selectedCategory
          );
          setFilteredProducts(newProducts);
        }, 0);
      }, [selectedCategory]);
      // Kategori değiştir
      const handleNextCategory = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % categories.length);
      };
      const handlePrevCategory = () => {
        setSelectedIndex(
          (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
        );
      };
    return (
        <div>
          <Header />
          <section>
            {/* BİRİNCİ COMPONENT */}
            <div className="flex flex-row pt-8">
            <h1 className="text-lg font-bold pl-64">Shop</h1>
            <div className="flex flex-row ">
            <h1 className="text-lg font-bold pl-64">Home</h1>
            <h1 className="text-lg font-bold pl-64 text-gray-500"> > Shop</h1>
            </div>
            </div>
            {/* İKİNCİ COMPONENT */}
              <div className="flex justify-center items-center gap-4 pt-8 pb-8">
                {Array()
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
          {/*ÜÇÜNCÜ COMPONENT*/}
          <div className="pl-64 pr-64">
          <ResultsFilter/>
          </div>
          {/*DÖRDÜNCÜ COMPONENT*/}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 items-stretch">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="text-center flex flex-col items-center justify-between bg-white shadow-md rounded-lg p-4 h-full"
            >
              <div className="w-full h-40 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="mt-2 text-sm font-semibold text-gray-900 pt-14">
                {product.title}
              </h3>
              <p className="text-xs text-gray-500">{product.department}</p>
              <p className="mt-1 text-sm">
                <span className="text-gray-400 line-through">${product.price}</span>{" "}
                <span className="text-green-500 font-semibold">
                  ${product.discountPrice}
                </span>
              </p>
            </div>
          ))}
        </div>
          </section>
          <Footer />
        </div>
      );
    };
    
    export default ShopPage;