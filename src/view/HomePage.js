
/* import { Route } from 'react-router-dom';
import Contact from '../view/Contact';
import About from '../view/About';
import Profile from '../view/Profile';
import NavBar from '../components/NavBar'; */
import React from 'react';

export default function HomePage() {
  console.log(sessionStorage.getItem('isLoggedIn'));
  return (
    <div>
      HomePage
    </div>
  );
}
