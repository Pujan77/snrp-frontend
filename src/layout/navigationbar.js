import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
      <div className="navbar-cust">
        <div className="left-part">
          <li className="logo">
            <img
              src="https://cdn.discordapp.com/attachments/1077469691800461438/1078762715251749035/snrp_logo.png"
              alt=""
            />
          </li>
        </div>
        <div className="right-part">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
        </div>
      </div>
      <div className="banner-container">
        <div className="banner">
          <img
            src="https://secret-sahil.github.io/Habour-Roleplay-Website/images/banner-gtav.jpg"
            alt="banner"
          />
        </div>
        <div className="banner-text">
          <p>SUPREME NEPAL</p>
          <p className="small-reloaded">RELOADED</p>
          <img
            src="https://secret-sahil.github.io/Habour-Roleplay-Website/images/icons/money.png"
            alt="money"
          />
          {/* <button onClick={() => console.log("hu")} className="connect-btn">
            START PLAYING
          </button> */}
          <img
            src="https://secret-sahil.github.io/Habour-Roleplay-Website/images/icons/car.png"
            alt="car"
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigationbar;
