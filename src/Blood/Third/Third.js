import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Row,Col,Button} from 'react-bootstrap';
import './Third.css';
import Right from './Right/Right';
import Left from './Left/Left';
import swal from 'sweetalert';

const Third = () => {
    const navigate=useNavigate();
    const getBlood=()=>{
        navigate("/contact");
        swal({
            title: "Please fill up the form,it's totatly our responsibility to help you",
            text: "Will call you or at your address in 5 minutes",
            icon: "success",
            button: "OK",
          });
      }
    return (
        <>
        <Row>
        <Col><Left className="Left"/></Col>
        <Col><Right className="Right"/></Col> 
        </Row>
        <br/>
        <center><Button variant="primary" onClick={getBlood} className="btnb">Check Out</Button></center>
        </>
    )
}

export default Third
