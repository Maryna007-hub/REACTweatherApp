import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather.js";
import "./App.css";
import Link from "./Link";

function App() {
  return (
    <div className="App">
      <Weather />
      <Link />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
