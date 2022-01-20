import React from 'react';
import { Card,Row,Col,Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import serviceData from "../Services.json";
import './Vehical.css';

const Vehical = () => {
    return (
        <>
        <br/>
        <Row xs={1} md={2} className="g-4">
        {
    serviceData.Services.map((value)=>(
<Col key={value.service_id}>
  <Card className="subCard1">
    
  <Card.Body>
      <Card.Title>Type:  {value.service_name}</Card.Title>
      <Card.Img className="vpic" variant="top" src={value.service_image} />
      <Card.Text>{value.service_description}</Card.Text>
      <Button variant="primary" className="details"><Link to={`/subvehical/${value.service_id}`} className="details1">Catagory</Link></Button>
    </Card.Body>
  </Card>
</Col>
        ))        
}
</Row>
<br/>
        </>
    )
}
export default Vehical

