import "./App.css";
import { useState } from "react";
import HomePage from "./components/Pages/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <HomePage
      listTransactions={listTransactions}
      setListTransactions={setListTransactions}
    />
  );
}

export default App;
