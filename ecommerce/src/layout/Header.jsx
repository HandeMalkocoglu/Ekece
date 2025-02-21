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
      <div className="flex space-x-4">
        <div className="flex items-center space-x-1">
          <FaUser className="text-blue-500" />
          <span className="text-blue-500">Login/Register</span>
        </div>
        <FaShoppingCart className="text-blue-500" />
        <FaSearch className="text-blue-500" />
        <FaHeart className="text-blue-500" />
      </div>
    </header>
  );
}

export default Header;
