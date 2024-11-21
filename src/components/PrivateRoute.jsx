import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { isLoggedIn } = useContext(UserAuthContext);

  return (
    <>
      {isLoggedIn ? (
        <>{props.children}</>
      ) : (
        <>
          <Navigate to={"/user-auth/Login"} />
        </>
      )}
    </>
  );
};

export default PrivateRoute;
