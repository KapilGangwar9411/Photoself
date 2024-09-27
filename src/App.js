import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate, // Import useNavigate for navigation
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { auth } from "./components/firebase";
import Welcome from "./components/Welcome"; // Import the Welcome component

function App() {
  const [user, setUser] = useState();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []); // Run useEffect once on mount

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/profile" /> : <Welcome onLoginSignup={() => navigate('/login')} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
