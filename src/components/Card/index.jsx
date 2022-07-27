import "./card.css";

function Card({ item, setListTransactions, listTransactions }) {
  if (item.type === "Entrada") {
    return (
      <div className="card">
        <div className="div-entrada">
          <div className="div-cardDescription">{item.description}</div>
          <div className="div-type">{item.type}</div>
          <div className="div-value">R${item.value}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="div-saida">
          <div className="div-cardDescription">{item.description}</div>
          <div className="div-type">{item.type}</div>
          <div className="div-value">R${item.value}</div>
        </div>
      </div>
    );
  }
}

export default Card;
