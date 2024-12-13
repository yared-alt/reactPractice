import React from 'react'
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div>
    
    <nav className="navbar">
          <ul>
            <li><Link to="/signUp">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
    </div>
  )
}
