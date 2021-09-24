import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const userInitialState = {
    username: "",
    email: "",
    mobile: "",
    isChef: false,
  };
  const [user, setUser] = useState(userInitialState);
  //const [foods, setFoods] = useState([]);
  const value = {
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
