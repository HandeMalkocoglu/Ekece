import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';
import data from "../data/data.json";

function Header() {
  const { menu } = data;

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white  pl-64 pr-64 container mx-auto">
      <h1 className="text-lg font-bold">Bandage</h1>
      <nav>
        <ul className="flex space-x-4">
          {menu.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase()}`} className="text-gray-500 hover:text-black">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex space-x-4 ml-[90px] items-center">
        {/* Login/Register Butonu */}
        <Link to="/signup">
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            <FaUser />
            <span>Login/Register</span>
          </button>
        </Link>
        <FaShoppingCart className="text-blue-500 cursor-pointer" />
        <FaSearch className="text-blue-500 cursor-pointer" />
        <FaHeart className="text-blue-500 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
