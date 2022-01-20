import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { Card,Row,Col,Button } from 'react-bootstrap';
import bloodData from "../Blood.json";
import './Second.css';

function Second() {
    const Types=useParams();
    console.log("Params",Types);

        const Typesdata=bloodData.blood.find((val)=>val.blood_id===Types.blood_id);
        console.log("Sub",Typesdata);
    return (
        <>
        <Row xs={1} md={2} className="g-4">
        {
            Typesdata.service_topic.map((val)=>(
<Col key={val.sub_id}>
  <Card className="subCard">
    <Card.Img className="pic" variant="top" src={val.sub_image1} />
    <Card.Body>
      <Card.Text>Type:  {val.sub_name}</Card.Text>
      

      <Button variant="primary" className="btnbe"><Link to={`/bloodenquiary/${Types.blood_id}/${val.sub_id}`} className="btnbe1">Blood Enquiary</Link></Button>
    </Card.Body>
  </Card>
</Col>

        ))
        }
        </Row>
        </>
    )
}

export default Second
