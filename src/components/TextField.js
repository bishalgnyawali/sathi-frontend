import React,{useState} from 'react';
import '../css/App.css';

export default function TextField(props) {

  
    return (
        <>
            <label className="FormField__Label" htmlFor={props.id}>{props.children}</label>
            <input type={props.type} id={props.id} className="FormField__Input" 
                  placeholder={props.placeholder} name={props.name} 
                  value={props.value} onChange={props.onChange}
            />
        </>
    )
}
