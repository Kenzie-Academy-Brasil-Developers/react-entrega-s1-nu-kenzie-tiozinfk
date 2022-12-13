import Form from "../../components/Form";
import logo from "../../logo.png";
import { useState } from "react";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
  const [listTransactions, setListTransactions] = useState([]);
  const navigate = useNavigate();
  return (
    <>
      <motion.header
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        exit={{ opacity: 0 }}
      >
        <div className="container">
          <div className="header">
            <img src={logo} alt="logo NuKenzie" />
            <button onClick={() => navigate("/")}>Inicio</button>
          </div>
        </div>
      </motion.header>

      <motion.div
        className="container-main"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        exit={{ opacity: 0 }}
      >
        <div className="div-left">
          <div className="form-flex">
            <Form
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
          </div>
          <div className="TotalMoney">
            <TotalMoney listTransactions={listTransactions} />
          </div>
        </div>

        <div className="list-Flex">
          <List listTransactions={listTransactions} />
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;
