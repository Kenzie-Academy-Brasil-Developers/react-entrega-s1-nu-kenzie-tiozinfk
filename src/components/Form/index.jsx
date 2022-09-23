import { useState } from "react";
import "./form.css";

function Form({ listTransactions, setListTransactions }) {
  const [userDescription, setUserDescription] = useState("");
  const [userValue, setUserValue] = useState("");
  const [userType, setUserType] = useState("Entrada");

  function list(description, value, type) {
    if (userDescription === "" || userValue === "") {
      return alert("Preencha todos os campos");
    }
    if (userType === "Saida") {
      setListTransactions([
        ...listTransactions,
        { description: description, type: type, value: parseInt(value * -1) },
      ]);
    } else {
      setListTransactions([
        ...listTransactions,
        { description: description, type: type, value: parseInt(value) },
      ]);
    }
    console.log(type);
  }

  return (
    <div className="container">
      <form
        name="form"
        className="form-div"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <p className="pDescription">Descriçao</p>
        <input
          name="description"
          value={userDescription}
          onChange={(evt) => {
            setUserDescription(evt.target.value);
          }}
          required
          className="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          maxLength="30"
        />
        <div className="pDiv">
          <p className="pNumber">Valor</p>
          <p className="pSelect">Tipo de valor</p>
        </div>
        <div className="div-input">
          <input
            value={userValue}
            required
            name="Number"
            placeholder="1                       R$"
            className="Number"
            type="number"
            onChange={(evt) => {
              setUserValue(evt.target.value);
            }}
            maxLength="10"
          />
          <select
            className="select"
            onChange={(evt) => setUserType(evt.target.value)}
          >
            <option>Entrada</option>
            <option>Saida</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            list(userDescription, userValue, userType);
            setUserDescription("");
            setUserValue("");
            setUserType("Entrada");
          }}
          className="btnEnviar"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
