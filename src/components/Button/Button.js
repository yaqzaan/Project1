import React, { Component } from 'react';
const Button = (props) => {
    return ( 
        <div style={{ color: "blue", background:"violet", borderRadius:"5px"}}>
           {/* {props.buttonText} */} {props.Children}
        </div>
     );
}
 
export default Button;