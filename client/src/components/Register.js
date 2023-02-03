import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const registerUser = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:9000/registerUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phoneNumber }),
        });

        const data = await response.json();

        console.log(data);
    };
    return (
        <div>
            <form onSubmit={registerUser}>
                <h1>This is Registration</h1>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input type="submit" value="submit detail" />
            </form>
        </div>
    );
}

export default Register;
