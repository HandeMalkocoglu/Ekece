import data from "../data/data.json";

function PageContent() {
  const { pageContent } = data;

  return (
    <section className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pageContent.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg flex justify-between">
            <div className="flex flex-col justify-between">
              <p className="text-xs text-gray-600">{item.tag}</p>
              <h3 className="text-2xl font-Montserrat font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-70 h-40 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PageContent;
