import { useNavigate } from "react-router-dom";
import logo from "../../logo.png";
import "./styles.css";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <img className="header-logo" src={logo} alt="logo-header" />

        <button className="header-button" onClick={() => navigate("/")}>
          Inicio
        </button>
      </div>
    </header>
  );
};
