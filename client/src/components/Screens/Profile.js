import React from 'react'


const Profile = () =>{
    return (
        <div style={{maxWidth:"550px",
        margin:"0px auto"}}> 
            <div style ={{
                display : "flex",
                justifyContent :"space-around",
                margin :"80px 0px",
                borderBottom :"1px solid grey"
            }}>
                <div>
                    <img style = {{width:"160px",height:"160px",borderRadius:"80px"}} 
                    src="https://images.unsplash.com/photo-1547624643-3bf761b09502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                    />
                </div>
                <div>
                    <h4>First User</h4>
                    <div style = {{
                        display:"flex",
                        justifyContent:"space-between",
                        width :"108%"
                    }}>
                        <h5>0 post</h5>
                        <h5>420 followers</h5>
                        <h5>69 following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/>

            </div>
        </div>
       

        
         
    )
}

export default Profile