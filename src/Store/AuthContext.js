import React, { useState, useEffect, useContext } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (userName) => {},
  userName: "",
  setUserName: (userName) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    const storedNameInformation = localStorage.getItem("Name");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
    if (storedNameInformation) {
      setUserName(storedNameInformation);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("Name");
    setIsLoggedIn(false);
  };

  const loginHandler = (userName) => {
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("Name", userName);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        userName,
        setUserName,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
