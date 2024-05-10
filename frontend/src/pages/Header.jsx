import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




const Header = () => {
  const navigate = useNavigate();
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);
  return (
    <header className="header">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <Link to="#">
              <img src="assets/logo shop.png" alt="logo" />

 
              Glamour-Grab

            </Link>
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <span>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/buy-now">Buy-Now</Link>
          </li>

        
        </ul>
      </nav>
      <div className="section__container header__container" id="home">
        <div className="header__image">
          <img src="assets/logo shop.png" alt="header" />
        </div>
        <div className="header__content">
          <h4>Shop Your Favourites Here</h4>
          <h1 className="section__header">Crush Your Next Fitness Challenge</h1>
          <p>
          Ready to build muscle, lose weight, and feel amazing?** Glowfit offers personalized programs and expert coaching to help you reach your fitness goals.
          </p>
          <div className="header__btn">
            <button
              onClick={() => {
                if (localStorage.getItem("userId")) {
                  navigate("/community");
                } else {
                  setIsAuthModalOpened(true);
                }
              }}
              className="btn"
            >
              Join FitConnect Free

            </button>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
