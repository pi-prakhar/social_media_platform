import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className = "my-card">
            <div className="card auth-card">
                <h2>Routine</h2>
                <input
                type="text"
                placeholder="email"
                />
                <input
                type="text"
                placeholder="password"
                />
                <button className="waves-effect waves-light btn">
                    Login
                </button>
                <h5>
                    <Link to="/login">Don't have an account?</Link>
                </h5>
                
                    
            </div>
        </div>
    )
}

export default Login