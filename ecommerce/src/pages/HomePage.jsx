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

function HomePage() {
  const { hero } = data;

  return (
    <div>
      <Header />
      <section
        className="relative h-[700px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="bg-opacity-50 p-6 rounded-lg text-center">
          <h2 className="text-6xl font-bold">{hero.title}</h2>
          <p className="max-w-xl mt-2 text-[20px] font-normal leading-[30px] tracking-[0.4px]">
            {hero.description}
          </p>
          <button className="mt-4 bg-[#23A6F0] hover:bg-blue-500 px-6 py-3 rounded">
            {hero.buttonText}
          </button>
        </div>
      </section>
      <PageContent />
      <BestSeller/>
      <MostPopular/>
      <BestSellerProducts/>
      <MostPopularProducts/>
      <BestSellerProductCard/>
      <LogoCarousel/>
      <Footer />
    </div>
  );
}

export default HomePage;
