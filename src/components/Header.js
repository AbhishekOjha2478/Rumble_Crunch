import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from './logo.jpg';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <div className="flex items-center">
        <img className="w-16 h-16" src= {logo} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li>
            Online status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/cart">Cart</Link>
          </li>
          <li>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
