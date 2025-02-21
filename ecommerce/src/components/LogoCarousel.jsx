import data from "../data/data.json";

const {banner} = data.logos;

const LogoCarousel = () => {
    return (
      <section className="py-10 bg-gray-50  pl-64 pr-64 container mx-auto">
        <div className="container mx-auto flex justify-between items-center gap-6 flex-wrap">
        {banner.map((logo, index) => (
  <div key={index} className="flex justify-center items-center w-32">
    <img
      src={logo.image}
      alt={`Logo ${index + 1}`}
      className="grayscale hover:grayscale-0 transition duration-200 max-w-full h-auto"
    />
  </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default LogoCarousel;