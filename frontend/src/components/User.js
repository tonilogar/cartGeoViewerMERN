import React, { Component } from 'react'
import '../css/User.css'
import {Link} from 'react-router-dom'

export default class User extends Component {
  render() {
    return (
      <div className="user">
      <svg  viewBox="0 0 650 650">
      <circle
        cx="313.65"
        cy="176.65"
        r="101.73"
        fill="none"
        stroke="#000"
        strokeDashoffset="300.69"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="40"
        paintOrder="markers fill stroke"
      ></circle>
      <ellipse
        cx="320.3"
        cy="592.76"
        fill="none"
        stroke="#000"
        strokeDashoffset="300.69"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="45.481"
        paintOrder="markers fill stroke"
        rx="192.43"
        ry="232.06"
      ></ellipse>
    </svg>
    <ul className="userUl">
      <li><Link href="indexCreateUser.html">Sign up</Link></li>
      <li><Link href="index.html">Sign out</Link></li>
      <li><Link href="indexLoginUser.html">Sign in</Link></li>
    </ul>
    </div>
    )
  }
}



