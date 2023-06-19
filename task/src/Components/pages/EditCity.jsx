import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function EditCity() {
  const { cityid } = useParams();

  console.log({ cityid });

  const [city, setCity] = useState(null);

  useEffect(() => {
    fetch(`https://648bfca08620b8bae7ec029b.mockapi.io/cities/${cityid}`, {
      method: "GET",
    })
      .then((res) => res.json())

      .then((res) => setCity(res));
  }, []);

  return city ? <EditCityForm city={city} /> : "Loading...";
}

function EditCityForm({ city }) {
  const [name, setName] = useState(city.name);
  const [address, setAddress] = useState(city.address);
  const [description, setDescription] = useState(city.description);
  const [image, setImage] = useState(city.image);

  const navigate = useNavigate();

  return (
    <div className="EditForm">
      <TextField
        id="name"
        label="Name"
        variant="filled"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <TextField
        id="address"
        label="Pincode"
        variant="filled"
        onChange={(event) => setAddress(event.target.value)}
        value={address}
      />
      <TextField
        id="description"
        label="Description"
        variant="filled"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <TextField
        id="image"
        label="Image"
        variant="filled"
        onChange={(event) => setImage(event.target.value)}
        value={image}
      />

      <Button
        color="success"
        variant="contained"
        onClick={() => {
          const updatedCity = {
            name: name,
            description: description,
            address: address,
            image: image,
          };
          fetch(
            `https://648bfca08620b8bae7ec029b.mockapi.io/cities/${city.id}`,
            {
              method: "PUT",
              body: JSON.stringify(updatedCity),
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then(() => navigate("/CityList"));
        }}
      >
        SAVE
      </Button>
    </div>
  );
}
