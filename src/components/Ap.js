
import React, { Component,useEffect, useState } from 'react';
import CountButton from './CountButton/CountButton';
 import SearchBar from './SearchBar/SearchBar';
 import Button from './Button/Button';
const App =() => {
 const [productsState, setProductState] = useState([])

 useEffect (() => {
fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((productsArray) => {
 const newProductState = productsArray.map((product) =>{
  return product.title
 })
 setProductState(newProductState)
})


setTimeout(()=> {
  setProductState([
  'tooth paste',
      'tooth brush',
  'mouth wash',
    'mouth cleaner',
    'mouth guard',
    'dental floss'])
}, 2000)
 }, [])
 const hasProducts = productsState.length > 0
  return(
   <div>
    {/* <CountButton incrementBy={2}  />
    <CountButton incrementBy={7} /> */}
{/*     
   {/* {hasProducts? <SearchBar products={productsState}/> : "Loadings.."}
  {/* //   const products ={ [
  //     'tooth paste',
  //     'tooth brush',
  //  'mouth wash',
  //  'mouth cleaner',
  //  'mouth guard',
  //  'dental floss'
  //  ]} */} 
 {/* <Button buttonText='myButton'/> */}
 <button>hello</button>
   </div>
  )
}

export default App;
