import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            

            <div className="card home-card">
                <div className="card-container">
                    <div>
                        <Link to="/profile"><img style={{ width: "40px", height: "40px", borderRadius: "20px" }}
                            src="https://images.unsplash.com/photo-1547624643-3bf761b09502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/></Link>

                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <p style={{ fontSize: "15px", fontStyle: "inherit", margin: "2px 0px 2px" }}>FirstUser</p>
                        <p style={{ fontSize: "9px", margin: "2px 0px 2px" }}>2 days ago</p>
                    </div>
                </div>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" />
                </div>
                <div className="card-content">
                    <i className="material-icons">favorite</i>
                    <h6>title</h6>
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add comment" />
                </div>
            </div>

            



        </div>
    )
}

export default Home