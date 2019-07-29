import React from 'react'
import Contact from '../view/Contact';
import About from '../view/About';
import Profile from '../view/Profile';
import LogIn from '../view/LogIn';
import NavBar from '../components/NavBar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomePage from '../view/HomePage';
//import AppBar from '@material-ui/core/AppBar'
export default function BRouter() {
  if(sessionStorage.getItem("isLoggedIn")==='false'){
    window.location.href="/";
  }
  const Elem=()=>{
    if(sessionStorage.getItem('isLoggedIn')==='true'){
      //console.log(sessionStorage.getItem('isLoggedIn'));
      return <NavBar/>
    }
    else 
      return (null);
  }
  return (
    <div>
      <Router>
        
            <Route exact path='/' component={LogIn}/>
            <Elem/>
            <Route path='/homepage' component={HomePage}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/profile' component={Profile}/>
          
      </Router>
    </div>
  )
}
