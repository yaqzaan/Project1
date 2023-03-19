import React, { useState } from 'react';

 const SearchBar = (props) => {
 const [searchValue, setSearchValue] = useState("")
 const handleInputChange = (event) => {
    setSearchValue(event.target.value)
 }
 const handleClearClick = (event) => {
setSearchValue('')
 }
 const shouldDisplayButton = searchValue.length > 0;
 const filteredProducts = props.products.filter((product) => {
   return product.includes(searchValue)
 })
    return ( 
        <div className='main'>
            <h1>Search</h1>
           
            <input type='text' value={searchValue} onChange={handleInputChange} />
     {shouldDisplayButton &&      <button onClick={handleClearClick}>Clear</button>}
         
           {filteredProducts.map((product) => {
               return<li key={product}>{product}</li> 
            })}
          
        </div>
     );
 }
  
 export default SearchBar;