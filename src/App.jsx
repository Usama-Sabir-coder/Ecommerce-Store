import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Homepage";
import ProductPage from "./pages/Products";
import LoginPage from "./pages/Login";
import ProductDetailsPage from "./pages/ProductDetails";
import UserAurth from "./pages/UserAurth";
import UserProfile from "./pages/Userprofile";
import PrivateRoute from "./components/PrivateRoute";
import CategoriesPage from "./pages/Categories";
import ABC from "./context/UserAuthContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <ABC>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="Products/:categoryName?"
            element={
              <PrivateRoute>
                <ProductPage />
              </PrivateRoute>
            }
          ></Route>
          <Route path="user-auth" element={<UserAurth />}>
            <Route
              index
              element={
                <h1 className=" text-5xl  text-white  bg-sky-700">
                  Index Route
                </h1>
              }
            ></Route>
            <Route path="Login" element={<LoginPage />}></Route>
            <Route path="Signup" element={<SignupPage />}></Route>
          </Route>
          <Route
            path="user-profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="Product-details/:ProductID"
            element={<ProductDetailsPage />}
          ></Route>
          <Route path="Category" element={<CategoriesPage />}></Route>
        </Routes>
      </ABC>
    </>
  );
};

export default App;
