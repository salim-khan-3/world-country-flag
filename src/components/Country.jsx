import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry,handleShowFlags }) => {
//   console.log(country);

  const [toggle, setToggle] = useState(false);

  const handleToggleButton = () => {
    setToggle(!toggle);
    handleVisitedCountry(country)
  };

  return (
    <div className={`card ${toggle ? "toggle-visited" : "white"}`}>
      <div>
        <img
          className="flag"
          src={country.flags.flags.png}
          alt={country.flags.flags.alt}
        />
      </div>
      <div className="d-f">
        <h1 className="title">Common Name:{country.name.common}</h1>
        <h2 className="sub-title">official Name:{country.name.official}</h2>
        <p className="area">Area: {country.area.area}</p>
        <h3 className="city">{country.capital.capital[0]}</h3>
        <p className="area">continents: {country.continents.continents[0]}</p>
        <div className="btn-container">
          <button className="btn" onClick={handleToggleButton}>
          {toggle ? "Visited" : "Not Visited"}
        </button>
        <button className="btn" onClick={()=>handleShowFlags(country.flags.flags.png)}>Flag Added</button>
        </div>
      </div>
    </div>
  );
};

export default Country;
