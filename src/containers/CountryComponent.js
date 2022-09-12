import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CountryComponent = () => {
  const countries = useSelector((state) => state.allCountries.countries);
  console.log("countries>:", countries);
  const renderList = countries.map((country) => {
    const { cca3, name, region, population, flags } = country;
    return (
      <div className="four column wide" key={cca3}>
        <Link to={`/v3.1/alpha/${cca3}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={flags.svg} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name.common.toString()}</div>
                <div className="meta">{region.toString()}</div>
                <div className="meta">{population.toString()}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default CountryComponent;
