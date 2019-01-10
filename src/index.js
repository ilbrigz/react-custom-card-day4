import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import Card from "./Card";

import "./styles.css";

function App() {
  return (
    <div className="App">
    <h1>Costum-Card @day4</h1>
      <Cards>
        <Card
          title="the amazing card"
          src="https://source.unsplash.com/weekly?grassland/400x500"
        />
        <Card
          title="the amazing card"
          src="https://source.unsplash.com/weekly?farm/400x500"
        />

        <Card
          title="the amazing card"
          src="https://source.unsplash.com/weekly?ocean/400x500"
        />

        <Card
          title="the amazing card"
          src="https://source.unsplash.com/weekly?river/400x500"
        />

        <Card
          title="testing"
          src="https://source.unsplash.com/weekly?mountain/400x500"
        />
      </Cards>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
