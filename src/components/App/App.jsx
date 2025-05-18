import { useContext } from "react";
import LoginForm from "../../LoginForm/LoginForm";
import Header from "../Header/Header";
import "./App.css";
import { AuthContext } from "../../providers/AuthProvider";

function App() {
  const { name } = useContext(AuthContext);

  return name ? (
    <div>
      <Header />
    </div>
  ) : (
    <LoginForm />
  );
}

export default App;
