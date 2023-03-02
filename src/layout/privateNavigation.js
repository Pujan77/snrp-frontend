import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const NavigationbarPrivate = () => {
  const { logOutUser, user } = useContext(AuthContext);
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
          <li className="name_wrapper">
            Hello, {user?.firstName} {user?.lastName}
          </li>
          <li>
            <Link to={"/user/dashboard"}>Home</Link>
          </li>
          {/* <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li> */}
          <li className="logout_wrapper" onClick={logOutUser}>
            Logout
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

export default NavigationbarPrivate;
