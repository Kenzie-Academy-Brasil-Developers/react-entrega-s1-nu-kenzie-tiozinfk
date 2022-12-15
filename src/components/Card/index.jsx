import "./card.css";

function Card({ item }) {
  if (item.type === "Entrada") {
    return (
      <div className="card">
        <div className="div-entrada">
          <div className="fist-line-card">
            <div className="div-cardDescription">{item.description}</div>
            <div className="div-value">R${item.value}</div>
          </div>
          <div className="div-type">{item.type}</div>
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
          <div className="div-type">{item.type}</div>
        </div>
      </div>
    );
  }
}

export default Card;
