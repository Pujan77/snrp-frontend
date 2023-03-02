import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import StaffPage from "./StaffPage";
import UserPage from "./UserPage";

function Dashboard() {
  const { user } = useContext(AuthContext);
  if (user?.role === "staff") {
    return <StaffPage />;
  } else if (user?.role === "user") {
    return <UserPage />;
  }
}

export default Dashboard;
