import React from 'react';
import '../css/App.css';
import LoginLeft from '../components/LoginLeft'
import LoginRight from '../components/LoginRight';
//import MelbourneImage from '../assets/Melbourne-Yarra.jpg'
function LogIn() {
    return ( 
        <div className = "App">
            <LoginLeft/>
            <LoginRight/>
        </div>
    );
}
export default LogIn;