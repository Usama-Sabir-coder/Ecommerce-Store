import { createContext, useState } from "react";

const UserAuthContext = createContext();

const ABC = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserAuthContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        age,
        setAge,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </UserAuthContext.Provider>
  );
};
export default ABC;
export { UserAuthContext };
