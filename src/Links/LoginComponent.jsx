import React, { useState, useContext } from "react";
import Header from "../Container/Header";
import "./LoginComponent.css";
import { UserContext } from "./userContext";
import { Link, useNavigate } from "react-router"; // Fixed import
import axios from "axios";

const LoginComponent = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { setLoggedInUser } = useContext(UserContext);
    const navigate = useNavigate();

    
    const handleLogin = async () => {
        if (username === "" && password === "") {
            setError("Please enter username and password");
            return;
        }

        try {
            const response = await axios.get(
                "https://6788e5b22c874e66b7d6c2da.mockapi.io/MiniProject"
            );

            const userData = response.data.find((u) => 
                u.signinUsername === username && u.signinPassword === password
            );

            if (userData) {
                setLoggedInUser(userData.signinUsername);
                navigate("/");
            } else {
                setError("Invalid username or password");
            }
        } catch (error) {
            setError("Something went wrong. Please try again later.");
        }
    };

    return (
        <div>
            <Header />
            <div className="login-container">
                <h1 className="login-title">Log In</h1>
                <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <label className="login-label">Name:</label>
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Enter your Name"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />

                    <label className="login-label">Password:</label>
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="login-button">
                        Log In
                    </button>
                </form>
                <p className="login-footer">
                    Don't have an account?{" "}
                    <Link to="/Signup" className="login-link">
                        Sign Up
                    </Link>
                </p>

                {error && <p className="login-error">{error}</p>}
            </div>
        </div>
    );
};

export default LoginComponent;
