import Form from "../../components/Form";
import { useState } from "react";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import "./style.css";
import { motion } from "framer-motion";
import { Header } from "../../components/Header";
import { ToastContainer } from "react-toastify";

function HomePage() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <ToastContainer />
      <Header />
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
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;
