import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const HelloWorld = () => <h1>Higher Order Components</h1>;
const Button = () => <button className="btn btn-primary">Press Button</button>;

const App = () => {
  return [<HelloWorld key="1" />, <Button key="2" />];
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
