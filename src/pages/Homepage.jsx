import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=6"
        );
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
      setLoading(false);
    };

    fetchFeaturedProducts();
  }, []);
  return (
    <>
      {/*  Banner */}
      <div
        className="relative bg-cover bg-center h-72 flex items-center justify-center text-white w-full"
        style={{
          backgroundImage: "url('/src/assets/fd2.jpg')",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-2xl font-bold bg-blue-200 bg-opacity-70 px-8 py-4 rounded-lg">
          Welcome to Store Clone
        </h1>
      </div>
      <br /> <br />
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-8 text-center">
        <h1 className="text-5xl font-bold">Clothing Store!</h1>
        <p className="text-xl mt-4">
          Explore the best products at unbeatable prices!
        </p>
      </div>
      <br />
      <br />
      {/* Featured Products */}
      <section className="mt-10 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-blue-900">
          Featured Products
        </h2>
        {loading ? (
          <div className="text-center text-blue-600 text-lg">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg text-center transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-4"
                />
                <h3 className="text-lg font-semibold  text-blue-800 truncate">
                  {product.title}
                </h3>
                <p className="text-black text-sm truncate">
                  {product.description.substring(0, 100)}...
                </p>
                <p className="text-black font-bold mt-2">${product.price}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* Sale Banner */}
      <div className="relative bg-gradient-to-r from-red-400 to-indigo-900 text-white py-10 mt-10">
        <h2 className="text-4xl font-bold m-5">
          Flash Sale! Up to Flat 50% Off
        </h2>
        <p className="mt-2 text-lg m-5">Limited time offer on top products!</p>
      </div>
      {/* Category Section */}
      <div className="mt-10 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-blue-900">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Electronics",
            "Jewelery",
            "Men's Clothing",
            "Women's Clothing",
          ].map((category, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl hover:bg-blue-100 transition duration-300"
            >
              <p className="text-lg font-medium text-blue-700">{category}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
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

export default HomePage;
