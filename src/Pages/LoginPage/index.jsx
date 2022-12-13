import "./login.css";
import image from "./image.svg";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <div className="container-login">
        <div className="div-content">
          <img src={logo} alt="logoSmall" className="logoSmall" />

          <h1 className="textH1">Centralize o controle das suas finanças</h1>
          <p className="textP">de forma rápida e segura</p>

          <button onClick={() => navigate("/home")} className="btnIniciar">
            Iniciar
          </button>
        </div>
        <img src={image} alt="logoBig" className="logoBig" />
      </div>
    </motion.div>
  );
}
export default LoginPage;
