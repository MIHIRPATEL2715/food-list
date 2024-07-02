import Hedding from "./components/Tittle";
import Fooditem from "./components/Items";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

function App() {
  let items = ["dal", "bhat", "roti", "shak", "butter milk"];
  return (
    <center>
      <div className="container">
        <Hedding className="head"></Hedding>
        <Fooditem></Fooditem>
      </div>
    </center>
  );
}

export default App;
