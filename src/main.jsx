import React from 'react'
import ReactDOM from 'react-dom/client'
//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter } from 'react-router-dom'
import './index.css' 
import { ShopContextProvider } from './Context/ShopContext';




ReactDOM.createRoot(document.getElementById('root')).render(

  
       <ShopContextProvider>
         <BrowserRouter>
    <App/>
        </BrowserRouter>
       </ShopContextProvider>

   
 
);

