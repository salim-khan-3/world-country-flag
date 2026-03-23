import { use, useState } from "react";
import Country from "../Country";

const Countries = ({ countryFlagPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [showFlags,setShowFlags] = useState([]);

  const handleVisitedCountry = (ppp) => {
    console.log("country is visited",ppp);
    const newUpdatedArr = [...visitedCountry,ppp];
    setVisitedCountry(newUpdatedArr);
  };


  const handleShowFlags = (sonia) =>{
    console.log('life is better when you can sex with someone');
    const newArrData = [...showFlags,sonia];
    setShowFlags(newArrData)
  }

  const countryData = use(countryFlagPromise);
  const countries = countryData.countries;
  return (
    <div className="container inter-fonts">
      <h1>hello country world... {countries.length} </h1>
      <p>Here your visited country: {visitedCountry.length}</p>
      <h3>Show visited flag name: {showFlags}</h3>
      <div className="card-container">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleShowFlags={handleShowFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
