import React from 'react'
import { Card,Row,Col,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import bloodData from "../Blood.json";
import './First.css';

function First() {
    return (
        <>
        <Row xs={1} md={2} className="g-5">
        {
            bloodData.blood.map((value)=>(
<Col key={value.blood_id}>
  <Card className="subCard">
  <Card.Img className="pic" variant="top" src={value.service_image} />  
  <Card.Body>
      <Card.Title>Type:  {value.service_name}</Card.Title>
      <Card.Text>{value.service_description}</Card.Text>
      <center><Button variant="primary" className="details"><Link to={`/subBlood/${value.blood_id}`} className="details1">Blood</Link></Button></center>
    </Card.Body>
  </Card>
</Col>
        ))        
}
</Row>
        </>
    )
}

export default First
