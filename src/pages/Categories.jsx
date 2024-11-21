import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuthContext";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products for the selected category
  const fetchCategoryProducts = async (category) => {
    setLoading(true);
    setSelectedCategory(category);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setCategoryProducts(response.data);
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <br /> <br />
      <br /> <br />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Browse by Categories
        </h1>

        {/* Categories Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
              onClick={() => fetchCategoryProducts(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products List */}
        {loading ? (
          <div className="text-center text-blue-600 text-lg">Loading...</div>
        ) : categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm truncate">
                  {product.description.substring(0, 100)}...
                </p>
                <p className="text-blue-600 font-bold mt-2">${product.price}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          selectedCategory && (
            <div className="text-center text-gray-600">
              No products found in this category.
            </div>
          )
        )}
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      {/* Footer */}
      <footer className="bg-blue-700 text-white py-8 mt-10">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm">
            &copy; 2024 Clothing Store Clone. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CategoriesPage;
