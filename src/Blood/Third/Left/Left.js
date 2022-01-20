import React from 'react'
import {useParams} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import bloodData from "../../Blood.json";
import './Left.css';


const Left = () => {
    const value=useParams();
    console.log("params",value);

    const serviceValue=bloodData.blood.find((data)=>data.blood_id === value.blood_id);
    console.log("topicValue",serviceValue);

    const serviceDetails=serviceValue.service_topic.find((result)=>result.sub_id === value.sub_id);
    console.log("subvalue",serviceDetails);
    return (
        <div className="left">
        &nbsp;
            <Card style={{ width: '18rem'}} className="card">
        <Card.Img variant="top" src={serviceDetails.sub_image1} className="last" />
        <Card.Body>
          <Card.Title>{serviceDetails.sub_name}</Card.Title>
          <Card.Text>
            {serviceDetails.sub_description}
          </Card.Text>
          
        </Card.Body>
      </Card>
        </div>
    )
}

export default Left
