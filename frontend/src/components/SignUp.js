import React, { Component } from 'react'
import '../css/SignUp.css'
export default class SignUp extends Component {
    render() {
        return (
            <form action="data/">
                <div className="container">
                    <span className="header">      
                    <h1> Create your acount </h1>
                    </span>
                    <label className="labelUserName" for="userName">  User name :  </label>
                    <input className="inputUserName" type="text" id="userName"/>
                    <label className="labelPassword" for="password">  Password : </label>
                    <input className="inputPassword" type="password" placeholder="********" id="password"/>
                    <label className="labelConfirmPassword" for="confirmPassword">  Confirm password : </label>
                    <input className="inputConfirmPassword" type="password" placeholder="********" id="confirmPassword"/>
                    <label className="labelEmail" for="email">  Email :  </label>
                    <input className="inputEmail" type="email" id="email"/>
                    <input className="buttonCreateUser" type="submit" value="Create user"/>
                </div> 
                <div className="createUserSocialmedia">     
                    <p> Create your acount with social media </p>
                </div>
                <div className="social">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-google"></a>
                    <a href="#" className="fa fa-instagram"></a>
                </div>
                <button className="buttonHome"  onclick="home()" type="button"><a href="indexEnglish.html">Home</a></button>
                {/* <img className="logo" src="./images/logoTonilogar.gif" alt="Logo"/>   */}
                <footer className="footer">
                    <a href="/">Terms</a>
                    <a href="/">Privacy   </a>
                    <a href="/">helpt</a>
                </footer>
            </form>
        )
    }
}
