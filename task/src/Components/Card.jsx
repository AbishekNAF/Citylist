import { useState, useEffect } from "react";


function Card() {
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

  console.log(data);
  return (
    <div className="City">
      {data.map((city) => {
        return (
          <div className="card-container">
            <img src={city.image} />
            <h1>{city.name}</h1>
            <h2> {city.Code}</h2>
            <p> {city.address}</p>
            <p>{city.discription}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
