import React, { Component } from 'react'
import '../css/SignUp.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default class SignUp extends Component {
    state = {
       
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });
    }
    
    render() {
        return (
            <form className="formSignUp" onSubmit={this.handleSubmit}>     
                <h1> Create your acount </h1>
                <label className="labelUserName" htmlFor="userName">  User name   </label>
                <input onChange={this.handleChange} className="inputUserName" type="text" id="userName"/>
                <label className="labelPassword" htmlFor="password">  Password  </label>
                <input onChange={this.handleChange} className="inputPassword" type="password" placeholder="********" id="password"/>
                <label className="labelConfirmPassword" htmlFor="confirmPassword">  Confirm password  </label>
                <input onChange={this.handleChange} className="inputConfirmPassword" type="password" placeholder="********" id="confirmPassword"/>
                <label className="labelEmail" htmlFor="email">  Email   </label>
                <input onChange={this.handleChange} className="inputEmail" type="email" id="email"/>
                <input onClick={this.handleSubmit}  className="buttonCreateUser" type="submit" value="Create user"/>
                <button onClick={this.handleClick} className="buttonHome"  type="button"><Link to="/">Home</Link></button>
                <footer className="footer">
                    <Link to='/'>Terms</Link>
                    <Link to='/'>Privacy</Link>
                    <Link to='/'>helpt</Link>
                </footer>
            </form>
        )
    }
}
