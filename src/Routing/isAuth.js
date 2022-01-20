import React from 'react';
import {useNavigate} from 'react-router-dom';
import './isAuth.css'

const IsAuth = () => {
    const navigate=useNavigate();
    const auth=()=>{
        navigate("/Login");
    }
    return (
        <div className="myauth">
        <center><h1 className="patc">Please authenticate to continue</h1>
            <button onClick={auth} className="tolog">Click to Authenticate</button></center>
        </div>
    )
}

export default IsAuth