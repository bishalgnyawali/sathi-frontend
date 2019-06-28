import React from 'react';
//import PropTypes from 'prop-types';

function Button(props) {
    return (
        <div>
            <button style={{color:'black',backgroundColor:'tomato'}}>{props.name}</button>
        </div>
    )
}

export default Button;


