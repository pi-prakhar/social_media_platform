import React from 'react'
import {Link} from 'react-router-dom' 
const Signup = () => {
    return (
        <div className = "my-card">
            <div className="card auth-card">
                <h2>Routine</h2>
                <input
                type="text"
                placeholder="Name"
                />
                <input
                type="text"
                placeholder="Email"
                />
                <input
                type="text"
                placeholder="Password"
                />
                <button className="waves-effect waves-light btn">
                    Signup
                </button>
                <h5>
                    <Link to="/login">Already have an account?</Link>
                </h5>
                
                    
            </div>
        </div>
    )
}

export default Signup