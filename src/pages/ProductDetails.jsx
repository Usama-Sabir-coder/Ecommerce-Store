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
  return (
    <>
      {Object.keys(ProductData).length !== 0 ? (
        <>
          <h1>{ProductID}</h1>
          <h1>Title : {ProductData.title}</h1>
          <img src={ProductData.image} />
          <p>Price : {ProductData.price}</p>
          <p>Description : {ProductData.description}</p>
          <p>Rating : {ProductData.rating.rate}</p>
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-10">
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
    </>
  );
};

export default ProductDetailsPage;
