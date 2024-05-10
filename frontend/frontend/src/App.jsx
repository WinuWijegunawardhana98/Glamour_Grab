import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import WomenMeasurementForm from "./Pages/WomenMeasuremenForm"
import ModelViewer from "./Pages/ModelViewer"
import MenMeasurementForm from "./Pages/MenMeasurementForm"

const App = () => {
  return (
    <>
    <style>
        {`
          /* Basic styling for the header */
          .header {
              background-color: #333;
              color: #fff;
              padding: 10px 20px;
              text-align: center;
          }
          
          /* Styling for the navigation links */
          .nav {
            display: inline-block;
        }
        
        .nav ul {
            padding: 0;
            list-style-type: none;
        }
        
        .nav ul li {
            display: inline;
            margin-right: 20px;
        }
        
        .nav ul li a {
            color: #fff;
            text-decoration: none;
        }
        
        /* Styling for the dropdown */
        .dropdown {
            position: relative;
            display: inline-block;
        }
        
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #333;
            min-width: 160px;
            z-index: 1;
        }
        
        .dropdown-content a {
            color: #fff;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }
        
        .dropdown:hover .dropdown-content {
            display: block;
        }
      
      /* Custom styling for the footer content */
      .footer-content {
        font-size: 20px;
        padding-top: 100px; /* Adjust as needed */
        text-align: center;
    }
        `}
      </style>


    
    <div>
      {/* header */}
      <body>
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li class="dropdown">
                    <a href="#">Services</a>
                    <div class="dropdown-content">
                        {/* <a href="#">Dress Me </a> */}
                        <a href="/menmeasurementform">Men</a>
                        <a href="/womenmeasurementform">Women</a>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</body>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/womenmeasurementform" element={<WomenMeasurementForm />} />  
        <Route path="/menmeasurementform" element={<MenMeasurementForm />} />  
        <Route path="/modelviewer" element={<ModelViewer />} /> 
      </Routes>


      
      <div>
        {/* footer */}
        &copy; 2024 Glamour Grab
      </div>
    </>
  )
}

export default App
