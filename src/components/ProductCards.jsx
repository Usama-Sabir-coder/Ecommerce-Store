import { Link, useNavigate } from "react-router-dom";

const ProductCards = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Product-details/${props.id}`);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md w-60 hover:bg-blue-50 hover:shadow-lg transition duration-300 text-center ">
      <h1>
        {/* <Link to={`/Product-detail/${props.id}`}>
        <h1>{props.title}</h1>
      </Link> */}
        <img
          src={props.image}
          alt={props.title}
          className="h-40 w-full object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl" onClick={handleClick}>
          <h1 className="text-lg font-semibold text-blue-800 truncate">
            {props.title}
          </h1>
        </h1>
        <h1 className="text-black font-bold"> ${props.price}</h1>
      </h1>
      <p className="text-xs truncate">{props.description}</p>
      <button className="bg-blue-600 text-white py-1 px-4 rounded-lg mt-4 hover:bg-blue-700 transition duration-300 justify-center items-center">
        View Details
      </button>
    </div>
  );
};

export default ProductCards;
