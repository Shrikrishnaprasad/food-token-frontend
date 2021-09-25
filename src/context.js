import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const URL = "https://food-token.herokuapp.com";
  const userInitialState = {
    id: "",
    username: "",
    email: "",
    mobile: "",
    isChef: false,
  };
  const [user, setUser] = useState(userInitialState);

  const value = {
    URL,
    userInitialState,
    user,
    setUser,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
