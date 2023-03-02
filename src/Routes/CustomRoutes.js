import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigationbar from "../layout/navigationbar";
import HomePage from "../Pages/HomePage";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import NavigationbarPrivate from "../layout/privateNavigation";
import Dashboard from "../Pages/Dashboard";

const CustomRoutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigationbar />}>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <NavigationbarPrivate />
              </PrivateRoute>
            }
          >
            <Route path="/user/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default CustomRoutes;
