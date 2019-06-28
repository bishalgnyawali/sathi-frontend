import React from 'react'
import '../css/App.css';
//import ImageView from './ImageView';
//const SourceImg ='../assets/Melbourne-Yarra.jpg';
function LoginLeft() {
  return (
    <div className="App__Aside">
      <img src={require('./Melbourne-Yarra.jpg')} alt="melbourne pic"/>
    </div>
  )
}
export default LoginLeft;
