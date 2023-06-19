import React from "react";
import Cardd from "../Cardd";
import { useState, useEffect } from "react";
function CityList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://648bfca08620b8bae7ec029b.mockapi.io/cities", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((Cities) => {
        setData(Cities);
        console.log(Cities);
      });
  }, []);
  return (
    <div className="main">
      <div className="container">
        {data.map((city) => {
          return (
            <Cardd
              name={city.name}
              Code={city.Code}
              address={city.address}
              description={city.description}
              img={city.image}
              id={city.id}
              setData={setData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CityList;
