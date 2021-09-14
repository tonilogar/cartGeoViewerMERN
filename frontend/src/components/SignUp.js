import React, { Component } from 'react'
import '../css/SignUp.css'
import {Link} from 'react-router-dom'

export default class SignUp extends Component {
    render() {
        return (
            <form className="formSignUp">     
                <h1> Create your acount </h1>
                <label className="labelUserName" for="userName">  User name   </label>
                <input className="inputUserName" type="text" id="userName"/>
                <label className="labelPassword" for="password">  Password  </label>
                <input className="inputPassword" type="password" placeholder="********" id="password"/>
                <label className="labelConfirmPassword" for="confirmPassword">  Confirm password  </label>
                <input className="inputConfirmPassword" type="password" placeholder="********" id="confirmPassword"/>
                <label className="labelEmail" for="email">  Email   </label>
                <input className="inputEmail" type="email" id="email"/>
                <input className="buttonCreateUser" type="submit" value="Create user"/>
                <button className="buttonHome"  onclick="home()" type="button"><Link to="/">Home</Link></button>
                <footer className="footer">
                    <Link to='/'>Terms</Link>
                    <Link to='/'>Privacy</Link>
                    <Link to='/'>helpt</Link>
                </footer>
            </form>
        )
    }
}
