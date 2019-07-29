import React, {useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import {IsLoggedInContext} from '../context/IsLoggedIn';
import {TokenContext} from '../context/TokenContext';
//import BRoute from './BRouter'
import Form from './Form';

export default function SignInForm() {
  const [token,setToken]=useContext(TokenContext);
  const [userId,setUserId]=useState('');
  const [password,setPassword]=useState('');
  const [isLoggedIn,setIsLoggedIn]=useContext(IsLoggedInContext);

  const handleChange=(e)=>{
    let target = e.target;
    let value = target.value;
    let name = target.name;

    if(name==='userId'){
      setUserId(value);
    }
    else{
      setPassword(value);
    }
}


const handleSubmit=async (e)=> {
    //setIsLoggedIn(false);
    e.preventDefault();
    await fetch('/login',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMywiaWF0IjoxNTYzNDE5MTcxfQ.w_8N4zZsmDEcZOOm7Q39uqPekkJIIxqjpbqjMJ7Eqxk'
      },
      method: "POST",
      body: JSON.stringify({user_id:userId,password:password,})
    }).then(async (result) => {
      
      return await result.json();
    }).then(async (json) => {
        setToken(()=>json.token);
        console.log(json.token);
        
        if(json.token==='invalid'||json.token==="Invalid"){
          alert('userName or Password wrong');
          
        }
        else{
          setToken(()=>json.token);
          setIsLoggedIn(()=>true);
          sessionStorage.setItem("isLoggedIn",true);
          window.location.href='/homepage';
          //props.history.push('/about');
        }
        //setTimeout(()=>console.log('my token '+token+isLoggedIn),0);
    }).catch((err)=>{
      console.log("my err:",err);
    })

    
}

  return (
    
    <div className="FormCenter">
        <Form onSubmit={handleSubmit} className="FormFields">
        
        <div className="FormField">
            <label className="FormField__Label" htmlFor="userId">User ID</label>
            <input type="text" id="userId" className="FormField__Input" placeholder="Enter your USER ID" name="userId" value={userId} onChange={handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={password} onChange={handleChange} />
          </div>

          <div className="FormField">
              <button type="submit"
              className="FormField__Button mr-20">Sign In</button> 
          </div>
        </Form>
      </div>
    )
}
