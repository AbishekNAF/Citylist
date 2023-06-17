import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import AddCity from "./Components/pages/AddCity.1";
import Home from "./Components/pages/Home";
import CityList from "./Components/pages/CityList";
import * as React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

function App() {
  const navigate = useNavigate();

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
        <Route path="/CityList" element={<CityList />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AddCity" element={<AddCity />} />
      </Routes>
    </div>
  );
}

export default App;
