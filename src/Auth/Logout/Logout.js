import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';
import swal from 'sweetalert';

const Logout = () => {
    const navigate=useNavigate();
    const loggingOut=()=>{
        window.localStorage.clear();
        navigate("/Login");
        swal({
            title: "Successfully loggedOut,See you next time",
            text: "Thank you",
            icon: "success",
            button: "OK",
          });
      }
    return (
        <div className="mylogout">
            <center><h1 className="Lop">click below button to logout</h1>
            <button onClick={loggingOut} className="lo">Log out</button></center>
        </div>
    )
}

export default Logout