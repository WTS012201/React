import logo from '../logo.svg';
import React, {Component} from "react";
class Header extends Component{
    render(){
      return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{this.props.title}</h1>
            <div>{this.props.num}</div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            Learn React
          </a>
      </header>
      );
    }
  }
  export default Header;