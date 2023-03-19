import React, { Component, useState, useEffect } from 'react';

const CountButton = (props) => {
console.log(props)

const [currentCount, setCurrentCount] = useState(0)

 
useEffect(() => {
    console.log(currentCount)
    if (currentCount === 10){
        // alert("the count is 10")
        setCurrentCount(0)
    }
},[currentCount])
// const buttonStyles = {
//     background: props.buttonColor,
//     // border: "1px solid black",
//     // borderRadius: props.borderRadius,
// } style={buttonStyles} used in button
    return ( 
        <div >
             <button onClick={handleClick}>+{props.incrementBy}</button>
             <div>{currentCount}</div>
        </div>
       
     );
}
 
export default CountButton;