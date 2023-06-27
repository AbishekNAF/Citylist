import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/pages/Home";
import CityList from "./Components/pages/CityList";
import * as React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { AddCity } from "./Components/pages/AddCity.1";
import EditCity from "./Components/pages/EditCity";

function App() {
  const navigate = useNavigate();
  //ABI

  return (
    <div className="App">
      <AppBar position="static" sx={{ mb: 10 }}>
        <Toolbar>
          <Button
            sx={{ mr: 2 }}
            variant="outlined"
            onClick={() => navigate("/Home")}
            color="inherit"
          >
            Home
          </Button>

          <Button
            sx={{ mr: 2 }}
            variant="outlined"
            onClick={() => navigate("/CityList")}
            color="inherit"
          >
            CityList
          </Button>

          <Button
            sx={{ mr: 2 }}
            variant="outlined"
            onClick={() => navigate("/AddCity")}
            color="inherit"
          >
            AddCity
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CityList" element={<CityList />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AddCity" element={<AddCity />} />
        <Route path="/CityList/Edit/:cityid" element={<EditCity />} />
      </Routes>
    </div>
  );
}

export default App;
