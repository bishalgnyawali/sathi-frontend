import React from 'react';
import NavBar from '../components/NavBar';
import Contact from './Contact';
import About from './About';
import Profile from './Profile';
import {BrowserRouter as Router,Route} from 'react-router-dom';
export default function HomePage() {
  return (
    <Router>
        <div className="Home">
            <NavBar/>
            {/*<Route exact path='/' component={HomePage}/>*/}
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/profile' component={Profile}/>
        <img className="Home_image" src={require('../assets/screen_2x Cropped.jpg')} alt="cleaning"/>
        </div>
    </Router>
  )
}
