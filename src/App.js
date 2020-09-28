import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Layout/Navbar';
import Adduser from './components/users/addusers'
import Edituser from './components/users/edituser'
import Showdetails from './components/users/showdetails'

import {BrowserRouter,Route,Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/adduser" component={Adduser}></Route>
      <Route exact path="/edituser/:id" component={Edituser}></Route>
      <Route exact path="/showdetails/:id" component={Showdetails}></Route>




      <About></About>
      <Contact></Contact>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
