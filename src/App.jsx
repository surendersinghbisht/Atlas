import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import CountriesList from './CountriesList';
import CountryDetails from "./CountryDetails";

function App() {

 return(
   <BrowserRouter>
   <div>
     
     <Routes>
     <Route path = "/" element={<Navigate to = "countries" />} />
       <Route path = "countries" element={<CountriesList />} />
       <Route path="countries/details/:capital" element={<CountryDetails />}/>
  
  </Routes>
   </div>
   </BrowserRouter>
 )
 
}

export default App;
