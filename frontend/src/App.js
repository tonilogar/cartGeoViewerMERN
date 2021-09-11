import React from 'react';
import Map from './components/Map';
import Tools from './components/Tools';
import User from './components/User';
import Search from './components/Search';
/* import Controls from './components/Controls' */
import Geolocator from './components/Geolocator'
import Perspective from './components/Perspective'
import Info from './components/Info'
import Layers from './components/Layers'
import CatchCoordinates from './components/CatchCoordinates'
import Coordinates from './components/Coordinates'
import CameraHeigth from './components/CameraHeigth'
import './css/App.css';


const App = () => (
  <div className = 'App'>
    <Map/>
    <Tools/>
    <User/>
    {/*<Search/>
     <Controls/> */}
    <Geolocator/>
    <Perspective/>
    <Info/>
    <Layers/>
    <CatchCoordinates/>
    <Coordinates/>
    <CameraHeigth/>
  </div>

);

export default App;