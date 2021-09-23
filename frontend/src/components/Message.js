import React, { Component } from 'react'
import "../css/Message.css";
export default class Message extends Component {
    render() {
        return (
            <div className = "message">
                <div className = "message_01">
                {this.props.palabra}
                <span>X</span></div> 
                
            </div>
        )
    }
}
