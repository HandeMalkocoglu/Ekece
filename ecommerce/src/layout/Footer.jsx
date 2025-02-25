import data from "../data/data.json";

function Footer() {
  const { agency, companyInfo, legal, features, resources, contact, socials, copyright } = data.footer;

  return (
    <footer className="bg-[#252B42] text-white py-10 pl-64 pr-64">
      <div className="flex justify-between container mx-auto px-4">
        <div>
          <h3 className="text-xl font-semibold">{agency.title}</h3>
          <p className="text-sm text-gray-400 mb-4">{agency.description}</p>
        </div>
        <button className="bg-[#23A6F0] px-6 py-3 rounded hover:bg-blue-500">
          {agency.buttonText}
        </button>
      </div>

      <div className="pt-10 container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-10">
        {[["Company Info", companyInfo], ["Legal", legal], ["Features", features], ["Resources", resources], ["Get In Touch", contact]].map(([title, items], i) => (
          <div key={i}>
            <h4 className="font-semibold mb-2">{title}</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-6 flex justify-between items-center">
        <p className="text-sm text-gray-400">{copyright}</p>
        <div className="flex space-x-4">
          {socials.map((social, i) => (
            <a key={i} href="#" className="text-gray-400 hover:text-white">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
