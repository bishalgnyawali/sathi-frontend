import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../css/App.css'

export default class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            userId: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }
    

    handleSubmit(e) {
        e.preventDefault();
        var data = this.state;
        fetch('/login',{
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMywiaWF0IjoxNTYzNDE5MTcxfQ.w_8N4zZsmDEcZOOm7Q39uqPekkJIIxqjpbqjMJ7Eqxk'
          },
          method: "POST",
          body: JSON.stringify({user_id:this.state.userId,password:this.state.password,})
        }).then((result) => {
          //console.log(result.json());
          // Get the result
          // If we want text, call result.text()
          console.log(result);
          return ;
        }).then((data) => {
          // Do something with the result
          console.log(data);
        }).catch((err)=>{
          console.log(err);
        })

        // console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="userId">User ID</label>
                <input type="text" id="userId" className="FormField__Input" placeholder="Enter your USER ID" name="userId" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
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
}