import React from 'react'
import {useParams,Link} from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import serviceData from "../Services.json";
import './Che_Vehical.css';

const Che_Vehical = () => {
    const value=useParams();
    console.log("params",value);

    const serviceValue=serviceData.Services.find((data)=>data.service_id === value.service_id);
    console.log("topicValue",serviceValue);

    const serviceDetails=serviceValue.sub_service.find((result)=>result.sub_id === value.sub_id);
    console.log("subvalue",serviceDetails);
    return (
        <center>
        <div>
        <Card >
        <Card.Img variant="top" src={serviceDetails.sub_image1} />
        <Card.Body>
          <Card.Title>{serviceDetails.sub_name}</Card.Title>
          <Card.Text>
            {serviceDetails.sub_description}
          </Card.Text>
          <Button variant="primary" className="checkout"><Link to={"/Checkout"} className="checkout1">Check Out</Link></Button>
        </Card.Body>
      </Card>
        </div>
        </center>
    )
}

export default Che_Vehical
