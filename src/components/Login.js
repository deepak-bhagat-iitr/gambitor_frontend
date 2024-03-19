import React from 'react';
import axios from 'axios'
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
function LoginComponent() {
    const history = useNavigate();

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    function submit(e) {
        e.preventDefault();
        axios.post("https://gambitor-backend.onrender.com/", {
            Email: Email,
            Password: Password

        })
            .then(res => {
                console.log(res)
                if (res.data == "exist") {
                    history("/home")
                }
                else if (res.data == "notexist") {
                    alert("Invalid")
                }
            })
            .catch(e => {
                alert("Error")
                console.log(e);
            })


    }
    return (
        <div className="parent">
            <div className="parent_div">
                <h2><i className="fas fa-lock icon"></i> Login to GambitoR</h2>
                <form onSubmit={submit}>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" required />
                    <input type="submit" value="Login" />
                </form>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;
