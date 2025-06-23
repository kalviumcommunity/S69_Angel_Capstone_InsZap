import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/signup"; 
import Login from "./Pages/login";
import ForgotPassword from "./Pages/forgotpassword";
import CreateNewPassword from "./Pages/createNewPassword";
import UserProfilePage1 from "./Pages/userProfilePage1";
import UserProfilePage2 from "./Pages/userProfilePage2";
import AddUser from "./Pages/adduser";
import DashboardPage from "./Pages/dashboardPage";
import StationDetailsPage from "./Pages/StationDetailsPage";
import PaymentsPage from "./Pages/PaymentsPage";

function App() {
  return (
    <Router>
      <Routes> // Frontend components added
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/createNewPassword" element={<CreateNewPassword/>}/>
        <Route path="/userProfilePage1" element={<UserProfilePage1/>}/>
        <Route path="/userProfilePage2/:id" element={<UserProfilePage2/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/station-details" element={<StationDetailsPage/>}/>
        <Route path="/payments" element={<PaymentsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
