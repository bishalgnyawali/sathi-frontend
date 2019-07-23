import React, {useState,useContext} from 'react';
//import { Link } from 'react-router-dom';
import '../css/App.css'
import {TokenContext} from '../context/TokenContext';
//import HomePage from '../view/HomePage';



export default function SignInForm() {
  const [token,setToken]=useContext(TokenContext);
  const [userId,setUserId]=useState('');
  const [password,setPassword]=useState('');

  const handleChange=(e)=>{
    let target = e.target;
    let value = target.value;
    let name = target.name;

    if(name=='userId'){
      setUserId(value);
    }
    else{
      setPassword(value);
    }
}


const handleSubmit=(e)=> {
  
    e.preventDefault();
    fetch('/login',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMywiaWF0IjoxNTYzNDE5MTcxfQ.w_8N4zZsmDEcZOOm7Q39uqPekkJIIxqjpbqjMJ7Eqxk'
      },
      method: "POST",
      body: JSON.stringify({user_id:userId,password:password,})
    }).then((result) => {
      return result.json();
    }).then((json) => {
        setToken((token)=>json.token);
        console.log('my token '+token);
    }).catch((err)=>{
      console.log("my err:",err);
    })

    // console.log('The form was submitted with the following data:');
    //console.log(this.state);
}
  
  
  
  
  
  
  return (
        
    <div className="FormCenter">
    
        <form onSubmit={handleSubmit} className="FormFields">
        
        <div className="FormField">
            <label className="FormField__Label" htmlFor="userId">User ID</label>
            <input type="text" id="userId" className="FormField__Input" placeholder="Enter your USER ID" name="userId" value={userId} onChange={handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={password} onChange={handleChange} />
          </div>

          <div className="FormField">
              <button onClick={()=>{
                  
              }} 
              className="FormField__Button mr-20">Sign In</button> 
          </div>
        </form>
      </div>
      
      
    );
}

/* export default class SignInForm extends Component {

  //static contextType=TokenContext;
    constructor() {
        super();

        this.state = {
            userId: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    render() {
        
    }
} */