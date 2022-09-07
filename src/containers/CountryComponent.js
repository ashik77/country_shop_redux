import React from "react";
import { useSelector } from "react-redux";

const CountryComponent = () => {
  const countries = useSelector((state) => state.allCountries.countries);
  console.log("countries>:", countries);
  const renderList = countries.map((country) => {
    const { id, name, region, population, flags } = country;
    return (
      <div className="four column wide" key={id}>
        <div className="ui link cards">
          <div className="card">
            {/* <div className="image">
              <img src={flags} alt={name} />
            </div> */}
            <div className="content">
              <div className="header">{name.common.toString()}</div>
              <div className="meta">{region.toString()}</div>
              <div className="meta">{population.toString()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default CountryComponent;
