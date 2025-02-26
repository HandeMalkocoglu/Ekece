import { ChevronRight } from "lucide-react";
import data from "../data/data.json";
import { useState } from "react";

const { products } = data.bestSellers;

function ProductGrid() {
  const [activePage, setActivePage] = useState(1);

  // Number of items per page
  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const currentPageProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  const handleFirstPage = () => {
    setActivePage(1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentPageProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="bg-[#F3F3F3] w-full mb-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-[#252B42] text-center font-bold text-base mb-1">
              {product.title}
            </h3>
            <p className="text-[#737373] text-center text-sm mb-2">
              {product.department}
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#BDBDBD] line-through text-base">
                ${Number(product.price).toFixed(2)}
              </span>
              <span className="text-[#23856D] font-bold text-base">
                ${Number(product.discountPrice).toFixed(2)}
              </span>
            </div>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <div className="flex border border-[#E8E8E8] rounded-md overflow-hidden">
          <button
            className="px-5 py-3 text-[#737373] border-r border-[#E8E8E8] hover:bg-[#F3F3F3]"
            onClick={handleFirstPage}
          >
            First
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-5 py-3 border-r border-[#E8E8E8] ${
                activePage === index + 1
                  ? "bg-[#23A6F0] text-white"
                  : "text-[#737373] hover:bg-[#F3F3F3]"
              }`}
              onClick={() => setActivePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-5 py-3 text-[#23A6F0] flex items-center hover:bg-[#F3F3F3]"
            onClick={handleNextPage}
          >
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
