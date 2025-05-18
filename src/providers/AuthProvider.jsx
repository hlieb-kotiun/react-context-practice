import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");

  const handleLogin = (user) => {
    if (user !== "admin") {
      toast.error("Incorrect name, try again!");
      return;
    }
    setName(user);
  };
  const handleLogout = () => setName("");

  const initialContext = {
    name,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={initialContext}>
      {children}
    </AuthContext.Provider>
  );
};
