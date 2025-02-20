
function PageContent() {
  return (
    <section className="container mx-auto p-6 ">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between">
      <div className="flex flex-col justify-between">
        <p className="text-xs text-gray-600">Your Space</p>
        <h3 className="text-2xl font-Montserrat font-semibold">Unique Life</h3>
        <p className="text-xs text-gray-600">Explore Items</p>
      </div>
      <img src="../../public/baner1.png" alt="Product 1" className="w-70 h-40 object-cover rounded-md" />
    </div>
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between">
      <div className="flex flex-col justify-between">
      <p className="text-xs  text-gray-600">Ends Today</p>
      <h3 className="text-2xl font-Montserrat font-semibold">Elements
      Style</h3>
        <p className="text-xs text-gray-600">Explore Items</p>
      </div>
      <img src="../../public/baner2.png" alt="Product 2" className="w-70 h-40 object-cover rounded-md" />
    </div>
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between">
      <div className="flex flex-col justify-between">
        <p className="text-xs text-gray-600">Ends Today</p>
        <h3 className="text-2xl font-Montserrat font-semibold">Elements
        Style</h3>
        <p className="text-xs text-gray-600">Explore Items</p>
      </div>
      <img src="../../public/baner3.png" alt="Product 3" className="w-70 h-40 object-cover rounded-md" />
    </div>
  </div>
</section>
  );
}
export default PageContent;