import { render } from "@testing-library/react";
import React from "react";
const initState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class MyForm extends React.Component {
  state = initState;
  handleChange = (event) => {
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckBox
        ? event.target.checked
        : event.target.value,
    });
  };
  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "invalid name";
    }
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (this.state.password.length < 3) {
      passwordError = "invalid password";
    }
    if (nameError || emailError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initState);
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ color: "red" }}>{this.state.nameError}</div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ color: "red" }}>{this.state.emailError}</div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ color: "red" }}>{this.state.passwordError}</div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
