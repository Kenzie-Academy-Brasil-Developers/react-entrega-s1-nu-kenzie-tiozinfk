import Form from "../../Form";
import logo from "../../../logo.png";
import { useState } from "react";
import List from "../../List";
import LoginPage from "../LoginPage";
import TotalMoney from "../../TotalMoney";
import "./style.css";

function HomePage({ listTransactions, setListTransactions }) {
  const [userIsLogged, setUserIsLogged] = useState(false);

  if (userIsLogged === true) {
    return (
      <>
        <header>
          <div className="container">
            <div className="header">
              <img src={logo} alt="logo NuKenzie" />
              <button onClick={() => setUserIsLogged(false)}>Inicio</button>
            </div>
          </div>
        </header>

        <div className="container-main">
          <div className="form-flex">
            <Form
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
          </div>

          <div className="list-Flex">
            <List listTransactions={listTransactions} />
          </div>
          <div className="TotalMoney">
            <TotalMoney listTransactions={listTransactions} />
          </div>
        </div>
      </>
    );
  } else {
    return <LoginPage setUserIsLogged={setUserIsLogged} />;
  }
}

export default HomePage;
