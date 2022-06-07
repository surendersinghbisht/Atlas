import axios from "axios";
import React from "react";


import CountriesRow from './CountriesRow'

function countriesList() {

  const [countryD, setCountryD] = React.useState([]);
  const [loading, setLoading] = React.useState(true);




React.useEffect(()=>{
  const token = axios.get('https://restcountries.com/v3.1/all');
token.then((response)=>{

  setCountryD(response.data);
  setLoading(false);
  console.log(response.data)
    
});
},[]);

const setInputValue =(result)=>{
  if(result < 3 || result === ''){
    return;
  }else{
    const promise = axios.get(`https://restcountries.com/v3.1/name/${result}`);
    promise.then((res) =>{
      setCountryD(res.data);
    })
  }
}


  return (
    
    <div className=" bg-gray-100  ">

      <div className="flex justify-between shadow-md ">
        
        <h1 className="font-extrabold text-5xl p-4 sm:pl-14 ">Atlas</h1>
        
        </div>
        <div className=" sm:pl-14 pt-8">
      <input type="text"  onChange={(event)=>setInputValue(event.target.value)} placeholder = "Search for a country...." className="rounded-md shadow-xl p-2 w-60 border-2 border-gray-200"/>
      </div>


      {loading &&
<div className="flex justify-center items-center font-bold text-2xl">Loading countries....</div>
      }
      <div className="flex flex-wrap p-4">

      {countryD.map(c => <div className="p-8 " ><CountriesRow country={c} key={c.capital} /> </div>)}
    </div></div>
  );
}

export default countriesList;
