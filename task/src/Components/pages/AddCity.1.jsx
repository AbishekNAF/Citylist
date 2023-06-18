import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddCity() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <div className="Add-City-form">
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
        <h1>
          <Button
            variant="contained"
            onClick={() => {
              const AddCity = {
                name: name,
                address: address,
                description: description,
                image: image,
              };
              fetch(`https://648bfca08620b8bae7ec029b.mockapi.io/cities`, {
                method: "POST",
                body: JSON.stringify(AddCity),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => res.json())
                .then(() => navigate("/AddCity"));
              alert("City Added");
            }}
          >
            Add City
          </Button>
        </h1>
      </div>
    </div>
  );
}
