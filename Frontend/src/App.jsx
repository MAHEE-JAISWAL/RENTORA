import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Mainn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";

import "./App.css";
// import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    // It handles the navigation and rendering of components in the app.
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* Managing all the Route components in the app.  */}
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
