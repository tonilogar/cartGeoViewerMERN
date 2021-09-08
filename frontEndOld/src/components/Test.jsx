import React, { Component } from 'react';
import '../assets/styles/components/Test.css'


import imgImg from '../assets/logoEpicGamesOptimizado.svg'



class Test extends React.Component {
  state = {
    estado : true,
  }
  

  render() {
    const { estado } = this.state;
    return( 
      <div>
        <img className="testButton_01" src={imgImg} />

        <button className="testButton_02" type="button">false</button>
      </div>
      )
  }
}

  
  
  
  

  
  
  
    
  


export default Test;