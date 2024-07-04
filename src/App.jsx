import Hedding from "./components/Tittle";
import Fooditem from "./components/Items";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  let [items, state] = useState(["dal", "bhat", "roti", "shak", "butter milk"]);
  let tittle = "Healthy Food";
  const handle = (event) => {
    if (event.key === "Enter") {
      let list = [...items, event.target.value];
      event.target.value = "";
      state(list);
    }
  };
  return (
    <center>
      <div className="container">
        <Hedding head={tittle} className="head"></Hedding>
        <Input handleonkeydown={handle}></Input>
        <Fooditem fitem={items}></Fooditem>
      </div>
    </center>
  );
}

export default App;
