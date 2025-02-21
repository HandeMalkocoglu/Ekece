import data from "../data/data.json";

const BestSellerProductCard = () => {
  const { products } = data.bestSellersProductCard;

  return (
    <section className="pl-64 pr-64 container mx-auto px-4 py-10">
  <div className="w-full">
    {/* Kategori Başlığı */}
    <div className="flex justify-between items-center border-b border-gray-300 pb-2">
      <h2 className="text-xl font-semibold text-gray-900 tracking-wide">
        BESTSELLER PRODUCTS
      </h2>
    </div>

        {/* Ürün Listesi */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="text-center flex flex-col items-center bg-white shadow-md rounded-lg p-4"
            >
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-80 h-60 object-contain rounded-lg"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="text-xs text-gray-500">{product.department}</p>
              <p className="mt-2 text-sm">
                <span className="text-gray-400 line-through">${product.price}</span>{" "}
                <span className="text-green-500 font-semibold">${product.discountPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerProductCard;
