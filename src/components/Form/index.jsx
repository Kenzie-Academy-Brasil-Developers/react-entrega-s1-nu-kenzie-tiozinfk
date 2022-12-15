import { useState } from "react";
import "./form.css";

function Form({ listTransactions, setListTransactions }) {
  const [userDescription, setUserDescription] = useState("");
  const [userValue, setUserValue] = useState(0);
  const [userType, setUserType] = useState("Entrada");

  function list(description, value, type) {
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
    <form
      name="form"
      className="form-div"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="input-form-values">
        <div className="input-select">
          <label htmlFor="label-description" className="pDescription">
            Descriçao
          </label>
          <input
            id="label-description"
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
        </div>
      </div>

      <div className="div-input">
        <div className="input-form-values">
          <div className="input-select">
            <label htmlFor="valor">Valor</label>
            <input
              id="valor"
              required
              name="Number"
              placeholder="1                          R$"
              className="Number"
              type="text"
              onChange={(evt) => {
                setUserValue(evt.target.value);
              }}
              maxLength="10"
            />
          </div>
        </div>
        <div className="input-form-values">
          <div className="input-select">
            <label htmlFor="select-type">Tipo</label>
            <select
              id="select-type"
              className="select"
              onChange={(evt) => setUserType(evt.target.value)}
            >
              <option>Entrada</option>
              <option>Saida</option>
            </select>
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          list(userDescription, userValue, userType);
        }}
        className="btnEnviar"
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
