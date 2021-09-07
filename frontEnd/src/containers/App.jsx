import React from 'react';
import Tools from '../components/Tools';
import User from '../components/User';
import Search from '../components/Search';
import MapBoxSearch from '../components/MapBoxSearch';
import Controls from '../components/Controls';  
import Geolocator from '../components/Geolocator'; 

import Perspective from '../components/Perspective';
import Info from '../components/Info';
import Layers from '../components/Layers';
import Map from '../components/Map';
import Test from '../components/Test';




import '../assets/styles/App.css';


const App = () => (
  <div className = 'App'>
    <Map/>
    <Tools/>
    <User/>
    <Search>
      <MapBoxSearch/>
    </Search>
    <Controls/> 
    <Layers/> 
    <Test/>
    
    
    <Perspective/>
    {/* <Test idButtonOpen="pepe"/> */}
    <Info/>
    
    <Geolocator/>
    
    
  </div>

);

export default App;