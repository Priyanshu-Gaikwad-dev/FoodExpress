import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router"; // Correct import
import axios from "axios";
import Header from "../Container/Header";
import "./SigninComponent.css";
import { UserContext } from "./userContext";

const SignIn = () => {
  const [signinUsername, setsigninUsername] = useState("");
  const [signinPassword, setsigninPassword] = useState("");
  const [signinError, setsigninError] = useState("");

  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handlesignin = async (event) => {
    event.preventDefault();

    if (signinUsername === "" && signinPassword === "") {
      setsigninError("Please enter Username and Password");
      return;
    }

    try {
      const signinResponse = await axios.get(
          "https://6788e5b22c874e66b7d6c2da.mockapi.io/MiniProject"
      )
      const signinData = signinResponse.data.some((u) => {
        return u.signinUsername === signinUsername});

      if (signinData) {
        setsigninError("Username already exists. Please choose a different username.");
        return;
      }
    } catch (error) {
        setsigninError(" Failed Fetching data. Please try again.");
      }

    try {
      const signinResponse = await axios.post(
        "https://6788e5b22c874e66b7d6c2da.mockapi.io/MiniProject",
        { signinUsername ,  signinPassword } // Proper payload format
      );

      if (signinResponse.status === 201) {
        setLoggedInUser(signinUsername);
        navigate("/");
      } else {
        setsigninError("Signin failed. Please try again.");
      }
    } catch (error) {
      setsigninError("Signin failed. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className="signin-container">
        <form className="signin-form" onSubmit={handlesignin}>
          <h2 className="signin-title">Sign In</h2>
          <div className="signin-group">
            <label className="signin-label">Name:</label>
            <input
              type="text"
              className="signin-input"
              placeholder="Enter your name"
              value={signinUsername}
              onChange={(e) => setsigninUsername(e.target.value)}
              required
            />
          </div>
          <div className="signin-group">
            <label className="signin-label">Password:</label>
            <input
              type="password"
              className="signin-input"
              placeholder="Enter your Password"
              value={signinPassword}
              onChange={(e) => setsigninPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>

          <p className="signin-footer">
            Don't have an account?{" "}
            <Link to="/signup" className="signin-link">
              Sign up here
            </Link>
          </p>

          {signinError && <p className="login-error">{signinError}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
