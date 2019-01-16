import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const HelloWorld = props => (
  <h1 onClick={props.increment}>
    {props.hello} {props.count}
  </h1>
);
const Button = props => (
  <button className="btn btn-primary" onClick={props.increment}>
    {props.count}
  </button>
);

const higherOrderComponent = WrappedComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        hello: "Higher Order Component",
        counter: 0
      };
    }
    addUpCounter = () => {
      this.setState((prevState, props) => {
        return {
          counter: prevState.counter + 1
        };
      });
    };

    render() {
      return (
        <WrappedComponent
          increment={this.addUpCounter}
          hello={this.state.hello}
          count={this.state.counter}
        />
      );
    }
  };

const HOCHelloWorld = higherOrderComponent(HelloWorld);
const HOCButton = higherOrderComponent(Button);
const App = () => {
  return [<HOCHelloWorld key="1" />, <HOCButton key="2" />];
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
