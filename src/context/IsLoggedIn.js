import React, { useState, createContext } from 'react';

export const IsLoggedInContext=createContext();

export const IsLoggedInProvider=(props)=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    
    return(
        <IsLoggedInContext.Provider value={[isLoggedIn,setIsLoggedIn]}>
            {props.children}
        </IsLoggedInContext.Provider> 
    );
}