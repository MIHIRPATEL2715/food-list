import Hedding from "./components/Tittle";
import Fooditem from "./components/Items";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

function App() {
  let items = ["dal", "bhat", "roti", "shak", "butter milk"];
  let tittle = "Healthy Food";
  return (
    <center>
      <div className="container">
        <Hedding head={tittle} className="head"></Hedding>
        <Fooditem fitem={items}></Fooditem>
      </div>
    </center>
  );
}

export default App;
