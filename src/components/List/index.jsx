import { useEffect, useState } from "react";
import Card from "../Card";
import cards from "./cards.png";
import "./list.css";

function List({ listTransactions }) {
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
          <header>
            <div className="container-list">
              <div className="list-flex">
                <h3>Resumo financeiro</h3>
                <div className="btn-div">
                  <button className="btn-todos">Todos</button>
                  <button className="btn-entradas">Entradas</button>
                  <button className="btn-saidas">Saidas</button>
                </div>
              </div>
            </div>
          </header>
          <div className="text-list">
            <h2>Você ainda não possui nenhum lançamento</h2>
          </div>
          <div className="div-empy">
            <img src={cards} alt="listCards" className="img-empy" />
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
                  <button className="btn-todos" onClick={() => filtrarTodos()}>
                    Todos
                  </button>
                  <button
                    className="btn-entradas"
                    onClick={() => filtrar("Entrada")}
                  >
                    Entradas
                  </button>
                  <button
                    className="btn-saidas"
                    onClick={() => filtrar("Saida")}
                  >
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
                    <Card item={item} />
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
