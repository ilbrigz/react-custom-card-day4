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
          title="the amazing grassland"
          src="https://source.unsplash.com/weekly?grassland/400x500"
        />
        <Card
          title="the amazing farm"
          src="https://source.unsplash.com/weekly?farm/400x500"
        />

        <Card
          title="the amazing ocean"
          src="https://source.unsplash.com/weekly?ocean/400x500"
        />

        <Card
          title="the amazing sunset"
          src="https://source.unsplash.com/weekly?sunset/400x500"
        />

        <Card
          title="the bird"
          src="https://source.unsplash.com/weekly?birds/400x500"
        />
      </Cards>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
