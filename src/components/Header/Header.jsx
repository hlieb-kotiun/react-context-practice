import { useContext } from "react";
import s from "./Header.module.css";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { name, handleLogout } = useContext(AuthContext);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Welcome, {name} </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Header;
