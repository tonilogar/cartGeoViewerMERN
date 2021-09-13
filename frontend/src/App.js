import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Map from './components/Map';
import Tools from './components/Tools';
import User from './components/User';
import Perspective from './components/Perspective'
import Info from './components/Info'
import Layers from './components/Layers'
import CatchCoordinates from './components/CatchCoordinates'
import Coordinates from './components/Coordinates'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import SignUp from './components/SignUp'
import Fondo from './components/Fondo'
import './css/App.css';


const App = () => (
  <Router className = 'App'>
    
    {/* <Map/>
    <Tools/>
    <User/>
    <Perspective/>
    <Info/>
    <Layers/>
    <CatchCoordinates/>
    <Coordinates/> */}
    
    
    <Route exact path="/" component={Map}/>
    <Route exact path="/" component={Tools}/>
    <Route exact path="/" component={User}/>
    <Route exact path="/" component={Perspective}/>
    <Route exact path="/" component={Info}/>
    <Route exact path="/" component={Layers}/>
    <Route exact path="/" component={CatchCoordinates}/>
    <Route exact path="/" component={Coordinates}/>
    <Route exact path="/signin" component={SignIn}/>
    <Route exact path="/signout" component={SignOut}/>
    <Route exact path="/signup" component={SignUp}/> 
  </Router>

);

export default App;