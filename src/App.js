import React, { Routes } from 'react';
import { Route } from 'react-router-dom';
import {home} from './pages/Home';
const App = () => {
    return ( 
        <Routes>
         <Route path='/' element={<home/>}/>
           
        </Routes>
     );
}
 
export default App;