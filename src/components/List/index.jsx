import { useState } from "react";
import Card from "../Card";
import cards from "./cards.png";
import "./list.css";

function List({ listTransactions, setListTransactions }) {
  const [listaFiltrada, setListaFiltrada] = useState([]);

  console.log(listaFiltrada);

  const filtrarTodos = () => {
    setListaFiltrada(listTransactions);
  };

  const filtrar = (type) => {
    const filtrados = listTransactions.filter((item) => {
      return item.type === type;
    });
    setListaFiltrada(filtrados);
  };

  if (listTransactions.length === 0) {
    return (
      <>
        <div className="div-cardsEmpy">
          <header className="container-list">
            <div className="list-flex">
              <h3>Resumo financeiro</h3>
              <div className="btn-div">
                <button className="btn">Todos</button>
                <button className="btn">Entradas</button>
                <button className="btn">Saidas</button>
              </div>
            </div>
          </header>
          <div className="cards-list-container">
            <div className="text-list">
              <h2>Você ainda não possui nenhum lançamento</h2>
            </div>
            <div className="div-empy">
              <img src={cards} alt="listCards" className="img-empy" />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <header>
            <div className="container-list">
              <div className="list-flex">
                <h3>Resumo financeiro</h3>
                <div className="btn-div">
                  <button className="btn" onClick={() => filtrarTodos()}>
                    Todos
                  </button>
                  <button className="btn" onClick={() => filtrar("Entrada")}>
                    Entradas
                  </button>
                  <button className="btn" onClick={() => filtrar("Saida")}>
                    Saidas
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div className="list-cards">
            <ul className="ul-cards">
              {(listaFiltrada.length > 0
                ? listaFiltrada
                : listTransactions
              ).map((item, index) => {
                return (
                  <li key={index}>
                    <Card
                      index={index}
                      item={item}
                      listTransactions={listTransactions}
                      setListTransactions={setListTransactions}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default List;
