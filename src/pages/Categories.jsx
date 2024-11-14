import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  const [categories, setCatgories] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      const resp = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );

      setCatgories(resp.data);
    };
    fetchCat();
  }, []);

  return (
    <>
      {categories.map((cat, index) => {
        return (
          <Link
            to={`/Products/${cat}`}
            className="text-blue-500 hover:text-blue-700 font-medium capitalize"
          >
            <h1 key={index}>{cat}</h1>
          </Link>
        );
      })}
    </>
  );
};

export default CategoriesPage;
