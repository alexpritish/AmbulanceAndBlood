import React from 'react'
import { useParams,Link } from 'react-router-dom';
import { Card,Row,Col,Button } from 'react-bootstrap';
import serviceData from "../Services.json";
import './Sub_Vehical.css';

const Sub_Vehical = () => {
    const Types=useParams();
    console.log("Params",Types);

        const Typesdata=serviceData.Services.find((val)=>val.service_id===Types.service_id);
        console.log("Sub",Typesdata);
    return (
        <>
        <br/>
        <Row xs={1} md={2} className="g-4">
        {
            Typesdata.sub_service.map((val)=>(
<Col key={val.sub_id}>
  <Card className="subCard2">
    <Card.Body>
    <Card.Img className="pic" variant="top" src={val.sub_image1} />
      <Card.Title>Type:  {val.sub_name}</Card.Title> 
<center>
      <Button variant="primary" className="enquiry"><Link to={`/enquiary/${Types.service_id}/${val.sub_id}`} className="enquiry1">Enquiary Now</Link></Button></center>
    </Card.Body>
  </Card>
</Col>

        ))
        }
        </Row>
        </>
    )
}

export default Sub_Vehical
