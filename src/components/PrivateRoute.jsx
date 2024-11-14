const PrivateRoute = (props) => {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn ? (
        <>{props.children}</>
      ) : (
        <>
          <Navigate to={"/Login"} />
        </>
      )}
    </>
  );
};

export default PrivateRoute;
