import "./card.css";
import { FaTrashAlt } from "react-icons/fa";

function Card({ item, setListTransactions, listTransactions, index }) {
  function handleDelete(index) {
    listTransactions.splice(index, 1);
    setListTransactions([...listTransactions]);
  }

  if (item.type === "Entrada") {
    return (
      <div className="card">
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
      </div>
    );
  } else {
    return (
      <div className="card">
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
      </div>
    );
  }
}

export default Card;
