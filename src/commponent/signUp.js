import React from 'react';

export default function signUp(){

    return (
        <div>
            <div className="section">
                <h1>Online Registration</h1>
                <form id="registrationForm">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />

                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" required />

                                    <button type="submit">Register</button>
                 </form>
                    <p id="message"></p>
            </div>
        </div>
    );
}
