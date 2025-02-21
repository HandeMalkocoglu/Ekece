import data from "../data/data.json";
const MostPopular = () => {
  const { title, description, product, features, image } = data.mostPopular;
  return (
    <section className="pl-64 pr-64 container mx-auto px-6 py-8 grid grid-cols-1  gap-8 items-center">
      {/* SOL GÖRSEL */}
      <div>
        <img
          src={image}
          alt="Delivery"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      {/* SAĞ BÖLÜM */}
      <div className=" pl-10 max-w-2xs flex flex-col items-center space-y-4">
        <h2 className="text-xl font-bold uppercase text-gray-800">{title}</h2>
        <p className="text-gray-500 text-center">{description}</p>
        {/* ÜRÜN BİLGİLERİ */}
        <div className="flex-col bg-white p-4 shadow-md rounded-lg flex items-center space-x-4 pt-16">
          <img
            src={product.image}
            alt={product.name}
            className="w-60 h-40 object-cover rounded-lg"
          />
            <p className="text-gray-800 font-bold pt-16">{product.department}</p>
            <div className="flex items-center space-x-2 pt-6">
            <p className="text-gray-400 line-through">${product.price}</p>
            <p className="text-green-500 font-semibold">${product.discountPrice}</p>
            </div>
          </div>
        </div>
      {/* ALT ÖZELLİKLER */}
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
  {features.map((feature, index) => (
    <div key={index} className="flex items-start space-x-4">
      {/* Kırmızı numara */}
      <p className="text-red-500 font-bold text-2xl">{index + 1}.</p>
      {/* İçerik (Başlık + Açıklama) */}
      <div>
        <h3 className="font-semibold text-gray-800 text-lg">{feature.title}</h3>
        <p className="max-w-40 text-gray-500 text-sm">{feature.description}</p>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};
export default MostPopular;