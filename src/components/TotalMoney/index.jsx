import "./totalMoney.css";

const TotalMoney = ({ listTransactions }) => {
  const totalValues = listTransactions.reduce((acc, { value }) => {
    return (acc += value);
  }, 0);
  return (
    <div className="valor-total">
      <span className="valor-total-text">Valor Total:</span>
      <span className="valor-total-number">
        {totalValues.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <p className="pTotal">O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;
