import React from 'react'
import PropTypes from 'prop-types';
import '../css/App.css';
import {Link} from 'react-router-dom';
function NavBar(props) {
  const navStyle={
    color:'white'
  }
  return (
    <nav className="App_NavBar">
      <ul>
        <Link style={navStyle} to="/">
          <li className="App_NavBar_li">Home</li>
        </Link> 
        <Link style={navStyle} to="/about">
          <li className="App_NavBar_li">About</li>
        </Link>
        <Link style={navStyle} to="/profile">
          <li className="App_NavBar_li">Profile</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li className="App_NavBar_li">Contact</li>
        </Link>
        <Link style={navStyle} to="/">
          <li className="App_NavBar_li">Pay</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar


