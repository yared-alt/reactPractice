import React from "react";

export default function login() {

    return (
        <>
            <div className="section">
                <h1>Login</h1>
                <form id="registrationForm">

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit">Login</button>
                </form>
                <p id="message"></p>
            </div>
        </>
    )
} 