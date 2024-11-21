import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [ProductData, setProductData] = useState({});
  const param = useParams();
  const ProductID = param.ProductID;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${ProductID}`
      );
      setProductData(response.data);
    };
    fetchData();
  }, []);

  let Rating = { color: "#FFC300" };
  return (
    <div className="text-center ">
      {Object.keys(ProductData).length !== 0 ? (
        <div className="text-sm truncate max-w-xs ">
          <h1>{ProductID}</h1>
          <img src={ProductData.image} />
          <h1 className="text-lg font-semibold text-blue-800">
            Title : {ProductData.title}
          </h1>
          <p>Description : {ProductData.description}</p>
          <p className="font-bold ">Price : {ProductData.price}</p>
          <h1>
            <p>Rating : {ProductData.rating.rate}</p>
            <i class="fa-solid fa-star" style={Rating} />
            <i class="fa-solid fa-star" style={Rating} />
            <i class="fa-solid fa-star" style={Rating} />
            <i class="fa-regular fa-star" />
            <i class="fa-regular fa-star" />
          </h1>
          <button className="bg-blue-600 text-white py-1 px-4 rounded-lg mt-4 hover:bg-blue-700 transition duration-300">
            Buy Now
          </button>
        </div>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
      {/* Footer */}
      <footer className="bg-blue-700 text-white py-8 mt-10">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm">
            &copy; 2024 Store Clone. All rights reserved.
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
    </div>
  );
};

export default ProductDetailsPage;
