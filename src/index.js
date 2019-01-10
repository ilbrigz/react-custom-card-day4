import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import Card from "./Card";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Cards>
        <Card title="the amazing card" />
      </Cards>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
