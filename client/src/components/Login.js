import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CirclesWithBar } from 'react-loader-spinner';

import './Login.css';

function Login() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const registerUser = async (event) => {
        event.preventDefault();
        setLoading(true);
        const response = await fetch('http://localhost:9000/loginUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phoneNumber }),
        });
        setLoading(false);
        const data = await response.json();
        if (data.user) {
            localStorage.setItem('token', data.user);
            console.log(data);
            alert('Login Successful');

            navigate('/dashboard');
        } else {
            alert('Invalid Username or Phonenumber');
        }
    };
    return (
        <div className="Auth-form-container">
            {loading ? (
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel="circles-with-bar-loading"
                />
            ) : (
                <form className="Auth-form" onSubmit={registerUser}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Phone Number</label>
                            <input
                                type="number"
                                className="form-control mt-1"
                                placeholder="Enter Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Login;
