import React from "react";
import { handleOut } from "./Functionality";
export default class Buttons extends React.Component {
  state = {
    istream: "",
  };

  //  Input stream
  updateInput = (event) => {
    event.target.value === "AC"
      ? this.setState({
          istream: "",
          ostream: "",
        })
      : event.target.value === "DEL"
      ? this.setState({
          istream: this.state.istream.slice(0, this.state.istream.length - 1),
        })
      : this.setState({
          istream: this.state.istream.concat(event.target.value),
        });
  };
  render() {
    return (
      <div className="calculator center">
        <div className="output">
          <div className="previous">{this.state.ostream}</div>
          <div className="current">{this.state.istream}</div>
        </div>
        <button value="AC" onClick={this.updateInput} className="span-two">
          AC
        </button>
        <button value="DEL" onClick={this.updateInput}>
          DEL
        </button>
        <button button value="/" onClick={this.updateInput}>
          /
        </button>
        <button value="1" onClick={this.updateInput}>
          1
        </button>
        <button value="2" onClick={this.updateInput}>
          2
        </button>
        <button value="3" onClick={this.updateInput}>
          3
        </button>
        <button button value="*" onClick={this.updateInput}>
          *
        </button>
        <button value="4" onClick={this.updateInput}>
          4
        </button>
        <button value="5" onClick={this.updateInput}>
          5
        </button>
        <button value="6" onClick={this.updateInput}>
          6
        </button>
        <button button value="+" onClick={this.updateInput}>
          +
        </button>
        <button value="7" onClick={this.updateInput}>
          7
        </button>
        <button value="8" onClick={this.updateInput}>
          8
        </button>
        <button value="9" onClick={this.updateInput}>
          9
        </button>
        <button button value="-" onClick={this.updateInput}>
          -
        </button>
        <button button value="." onClick={this.updateInput}>
          .
        </button>
        <button button value="0" onClick={this.updateInput}>
          0
        </button>
        <button
          className="span-two"
          onClick={() => {
            this.setState({
              istream: handleOut(this.state.istream, 0).toString(),
              ostream: handleOut(this.state.istream, 0).toString(),
            });
          }}
        >
          =
        </button>
      </div>
    );
  }
}
