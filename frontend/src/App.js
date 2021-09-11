import React from 'react';
import Map from './components/Map';
import Tools from './components/Tools';
import User from './components/User';
import Perspective from './components/Perspective'
import Info from './components/Info'
import Layers from './components/Layers'
import CatchCoordinates from './components/CatchCoordinates'
import Coordinates from './components/Coordinates'
import './css/App.css';


const App = () => (
  <div className = 'App'>
    <Map/>
    <Tools/>
    <User/>
    <Perspective/>
    <Info/>
    <Layers/>
    <CatchCoordinates/>
    <Coordinates/>
  </div>

);

export default App;