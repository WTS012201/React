import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Buttons from "./components/Buttons";
export default class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Buttons />
      </div>
    );
  }
}
