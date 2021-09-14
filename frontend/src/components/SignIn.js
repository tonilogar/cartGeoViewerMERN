import React, { Component } from "react";
import "../css/SignIn.css";
import { Link } from "react-router-dom";
export default class SignIn extends Component {
  render() {
    return (
      <form className="formSignIn">
          <h1> Login </h1>
          <label className="labelUserName"> User name : </label>
          <input className="inputUserName" type="text" />
          <label className="labelPassword"> Password : </label>
          <input className="inputPassword" type="password" placeholder="********"/>
          <input className="buttonLogin" type="submit" value="Login" />
          <label className="labelFPassword"><a href="indexForgotPasswordEnglish.html">Forgot password?</a></label>
          <button className="buttonHome" onclick="home()" type="button"><Link to="/">Home</Link></button>
          <footer className="footer">
            <Link to="/">Terms</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">helpt</Link>
          </footer>
      </form>
    );
  }
}

{
}
