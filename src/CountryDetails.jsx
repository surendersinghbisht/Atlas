import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";


function countryDetails() {
    
  const [details, setDetails] = React.useState([]);
  const [loading, setLoading] = React.useState(true)

    const data = useParams();

  


  React.useEffect(()=>{
    const promise = axios.get(`https://restcountries.com/v3.1/capital/${data.capital}`);
    promise.then((response)=>{
  
    setDetails(response.data);
    setLoading(false);
      
  });
  },[]);
  

  return (
    <div className=" bg-gray-300 h-screen ">
      {loading &&
<div className="flex justify-center items-center font-bold text-2xl">Loading country data....</div>
      }
      <div className="flex flex-wrap p-4"></div>
      <Link to="/countries" className="bg-blue-600 ml-6 mt-4 hover:bg-indigo-300 text-white rounded-md p-2 px-4">BACK</Link>
      
   
   {details.map(d => <div className="flex justify-center p-10">
     <div className="flex flex-col justify center">
       <div className="flex justify-center">
    <img className="h-44 w-60 rounded-md " src={d.flags.png}/></div>
    <div className="space-y-2 pt-4">
    <h1 className="font-bold text-xl  text-center pt-2">{d.name.common}</h1>
    <h1>Official Name: {d.name.official}</h1>
      <h1>Capital: {d.capital}</h1>
      <h1>Continent: {d.continents}</h1>
      <h1>Area: {d.area}</h1>
      <h1>Population: {d.population} (as per: 2019)</h1>
      <h1>Region: {d.region}</h1>
       <h1>Subregion: {d.subregion}</h1>
   </div></div>
   </div>
   )}
     
    </div>
  );
}

export default countryDetails;
