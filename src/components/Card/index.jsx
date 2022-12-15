import "./card.css";
import { FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ item, setListTransactions, listTransactions, index }) {
  function handleDelete(index) {
    listTransactions.splice(index, 1);
    setListTransactions([...listTransactions]);
    notify();
  }

  const notify = () => {
    toast.success("Deletado com sucesso");
  };

  if (item.type === "Entrada") {
    return (
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        exit={{ opacity: 0 }}
        className="card"
      >
        <div className="div-entrada">
          <div className="fist-line-card">
            <div className="div-cardDescription">{item.description}</div>
            <div className="div-value">R${item.value}</div>
          </div>
          <div className="second-line-card">
            <div className="div-type">{item.type}</div>
            <FaTrashAlt
              onClick={() => {
                handleDelete(index);
              }}
              className="trash-icon"
              size={13}
            />
          </div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        exit={{ opacity: 0 }}
        className="card"
      >
        <div className="div-saida">
          <div className="fist-line-card">
            <div className="div-cardDescription">{item.description}</div>
            <div className="div-value">R${item.value}</div>
          </div>
          <div className="second-line-card">
            <div className="div-type">{item.type}</div>
            <FaTrashAlt
              onClick={() => {
                handleDelete(index);
              }}
              className="trash-icon"
              size={13}
            />
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Card;
