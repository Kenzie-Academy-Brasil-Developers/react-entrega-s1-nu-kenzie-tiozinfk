import "./login.css";
import image from "./image.svg";
import logo from "./logo.png";

function LoginPage({ setUserIsLogged }) {
  return (
    <div className="background">
      <div className="container-login">
        <div className="div-content">
          <img src={logo} alt="logoSmall" className="logoSmall" />

          <h1 className="textH1">Centralize o controle das suas finanças</h1>
          <p className="textP">de forma rápida e segura</p>

          <button onClick={() => setUserIsLogged(true)} className="btnIniciar">
            Iniciar
          </button>
        </div>
        <img src={image} alt="logoBig" className="logoBig" />
      </div>
    </div>
  );
}
export default LoginPage;
