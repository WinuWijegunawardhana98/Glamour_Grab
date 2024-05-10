import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import MeasurementForm from "../pages/MeasurementForm";
import ModelDisplay from "./pages/ModelDisplay";

const Route = () => {
    return (
        <Router>
        <Routes> {/* Use Routes instead of Switch */}
          <Route exact path="/" element={<App />} /> {/* Specify element prop */}
          <Route path="/measurement-form" element={<MeasurementForm />} /> {/* Specify element prop */}
          {/* Add additional routes as needed */}
        </Routes>

        <Routes> {/* Use Routes instead of Switch */}
          <Route exact path="/" element={<App />} /> {/* Specify element prop */}
          <Route path="/model-display" element={<ModelDisplay />} /> {/* Specify element prop */}
          {/* Add additional routes as needed */}
        </Routes>
      </Router>
    );
  };
  
  export default Route;