import React from "react";
import {useNavigate, useParams} from 'react-router-dom';

function countriesRow({country}) {



  const navigate = useNavigate();

  return (
    
    <div className="  mx-auto shrink-0 ">
      <div onClick={()=> navigate(`/countries/details/${country.capital}`)}>
        <button>
      <div className="rounded-md bg-white w-60  flex flex-col  shadow-md">
      <img className="w-60 h-60 rounded-md" src={country.flags.png} />
        <div className="p-2 pt-4 ">
         
        <h1 className="text-lg font-bold" >{country.name.common}</h1>
        <div className="pt-4 pb-4">
      <h1>Capital: {country.capital}</h1>
      <h1>Continent: {country.continents}</h1>
      </div>
      </div>
      </div></button>
      </div>
      </div>
  );
}

export default countriesRow;
