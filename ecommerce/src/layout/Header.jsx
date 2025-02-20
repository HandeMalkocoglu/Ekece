import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';
function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="pl-50 text-lg font-bold">Bandage</h1>
      <nav>
      <ul className="flex space-x-4">
  <li><Link to="/" className="text-gray-500 hover:text-black">Home</Link></li>
  <li><Link to="/" className="text-gray-500 hover:text-black">Shop</Link></li>
  <li><Link to="/" className="text-gray-500 hover:text-black">About</Link></li>
  <li><Link to="/" className="text-gray-500 hover:text-black">Blog</Link></li>
  <li><Link to="/pricing" className="text-gray-500 hover:text-black">Contact</Link></li>
  <li><Link to="/contact" className="text-gray-500 hover:text-black">Pages</Link></li>
</ul>
      </nav>
      <div className="flex space-x-4 ml-[90px]">
  <div className="flex items-center space-x-1">
    <FaUser className="text-blue-500 cursor-pointer" />
    <span className="text-blue-500 cursor-pointer">Login/Register</span>
  </div>
  <FaShoppingCart className="text-blue-500 cursor-pointer" />
  <FaSearch className="text-blue-500 cursor-pointer" />
  <FaHeart className="text-blue-500 cursor-pointer" />
</div>
    </header>
  );
}
export default Header;