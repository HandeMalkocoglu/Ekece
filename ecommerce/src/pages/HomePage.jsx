import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PageContent from "../layout/PageContent";
function HomePage() {
  return (
    <div>
    <Header />
    <section
      className=" relative h-[700px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/shophero_720.jpg')" }}
    >
      <div className="bg-opacity-50 p-6 rounded-lg text-center">
        <h2 className="text-6xl font-bold">GROCERIES DELIVERY</h2>
        <p className="pl-22 max-w-xl mt-2 text-[20px] font-normal leading-[30px] tracking-[0.4px]">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <button className="mt-4 bg-[#23A6F0] hover:bg-blue-500 hover:cursor-pointer text-white px-6 py-3 rounded cursor-pointer">
  Start Now
</button>
      </div>
    </section>
    <PageContent/>
    <Footer />
  </div>
  );
}
export default HomePage;