import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import MeasurementForm from "../component/MeasurementForm";
import ModelDisplay from "../ModelDisplay";

const Route = () => {
    return (
        <Router>
        <Routes> {/* Use Routes instead of Switch */}
          <Route exact path="/" element={<App />} /> {/* Specify element prop */}
          <Route path="/measurement-form" element={<MeasurementForm />} /> {/* Specify element prop */}
          {/* Add additional routes as needed */}
        </Routes>
      </Router>
    );
  };
  
  export default Route;