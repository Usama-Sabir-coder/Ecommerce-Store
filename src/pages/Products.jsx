import axios from "axios";
import { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchedProduct, setsearchedProduct] = useState([]);

  const { CategoryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setsearchedProduct(response.data);
    };
    const fetchCategoryData = async () => {
      const resp = await axios.get(
        `https://fakestoreapi.com /products/category/${CategoryName}`
      );
      setProducts(resp.data);
      setsearchedProduct(resp.data);
    };

    CategoryName ? fetchCategoryData : fetchData();
  }, []);

  useEffect(() => {
    const searchResults = products.filter((item, index) => {
      if (item.title.toLowerCase().includes(searchString.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setsearchedProduct(searchResults);
  }, [searchString]);

  return (
    <>
      <br />
      <br />
      <h1 className="text-4xl font-bold mb-6  text-center">Our Products</h1>
      <input
        className="border-black w-full p-4 mt-2 mb-4  "
        placeholder="Search Product..."
        type="text"
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
      <br />
      <br />
      <div className="flex flex-wrap gap-6 justify-center">
        {searchedProduct.map((prod) => (
          <ProductCards
            id={prod.id}
            key={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
            image={prod.image}
          />
        ))}
      </div>
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

export default ProductPage;
