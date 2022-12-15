import { useState } from "react";
import { toast } from "react-toastify";
import "./form.css";

function Form({ listTransactions, setListTransactions }) {
  const [userDescription, setUserDescription] = useState("");
  const [userValue, setUserValue] = useState(0);
  const [userType, setUserType] = useState("Entrada");

  function list(description, value, type) {
    if (description === "" || value === 0) {
      return toast.error("Preencha todos os campos");
    }
    if (userType === "Saida") {
      setListTransactions([
        ...listTransactions,
        {
          description: description,
          type: type,
          value: parseInt(value * -1),
        },
      ]);
    } else {
      setListTransactions([
        ...listTransactions,
        {
          description: description,
          type: type,
          value: parseInt(value),
        },
      ]);
    }
  }

  return (
    <form
      name="form"
      className="form-div"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="input-select">
        <label htmlFor="label-description" className="pDescription">
          Descrição
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

      <div className="div-input">
        <div className="input-select">
          <label htmlFor="valor">Valor</label>
          <input
            id="valor"
            required
            name="Number"
            placeholder="1                          R$"
            className="Number"
            type="number"
            onChange={(evt) => {
              setUserValue(evt.target.value);
            }}
            maxLength="10"
          />
        </div>

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
