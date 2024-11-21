import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Clothing Store</h1>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/Products" className="hover:underline">
          Products
        </Link>
        <Link to="/Category" className="hover:underline">
          Categories
        </Link>
        <Link to="/user-auth/Login" className="hover:underline">
          Login
        </Link>
        <Link to="/user-auth/Signup" className="hover:underline">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
