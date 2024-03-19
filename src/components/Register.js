import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState("");
    const [Password, setPassword] = useState('');
    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        await axios.post("https://gambitor-backend.onrender.com/register", {
            Name: Name,
            Email: Email,
            Mobile: Mobile,
            Password: Password
        })
            .then(res => {
                if (res.data === "exist") {
                    alert("Email already exists");
                } else if (res.data === "notexist") {
                    history("/home");
                }
            })
            .catch(e => {
                alert("Error");
                console.log(e);
            });
    }

    return (
        <div className="parent">

            <div className="container">
                <h2>Register for GambitoR</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your Name" value={Name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Enter your Email Address" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="tel" placeholder="Enter your Phone Number" value={Mobile} onChange={(e) => setMobile(e.target.value)} pattern="[0-9]{10}" title="Please enter 10 digits" required />
                    <input type="password" placeholder="Enter Password" value={Password} onChange={(e) => setPassword(e.target.value)} required />

                    <div className="gender-select">
                        <label>Gender:</label>
                        <input type="radio" id="male" name="gender" required />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" required />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="preferNotToSay" name="gender" required />
                        <label htmlFor="preferNotToSay">Prefer not to say</label>
                    </div>

                    <div className="terms-checkbox">
                        <input type="checkbox" id="termsCheckbox" required />
                        <label htmlFor="termsCheckbox">I accept the terms and conditions</label>
                    </div>

                    <input type="submit" value="Register" />
                </form>
                <div className="register-link">
                    <p>Already have an Account? <Link to="/">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
