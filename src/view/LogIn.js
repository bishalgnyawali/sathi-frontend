import React from 'react';
import '../css/App.css';
import {TokenProvider} from '../context/TokenContext';
//import {IsLoggedInProvider} from '../context/IsLoggedIn';
import LoginLeft from '../components/LoginLeft'
import LoginRight from '../components/LoginRight';

//import MelbourneImage from '../assets/Melbourne-Yarra.jpg'

function LogIn() {
    return ( 
        <TokenProvider>
            <div className = "App">
                <LoginLeft/>
                <LoginRight/>
            </div>
        </TokenProvider>
    );
}
export default LogIn;