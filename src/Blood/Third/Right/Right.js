import React from 'react'
import {useParams} from 'react-router-dom';
import { Row } from 'react-bootstrap';
import bloodData from "../../Blood.json";
import './Right.css';

const Right = () => {
    const value=useParams();
    console.log("params",value);

    const serviceValue=bloodData.blood.find((data)=>data.blood_id === value.blood_id);
    console.log("topicValue",serviceValue);

    const serviceDetails=serviceValue.service_topic.find((result)=>result.sub_id === value.sub_id);
    console.log("subvalue",serviceDetails);
    return (
        <>
        &nbsp;
        <h1 className="txt1">Please select your desire bloodgroup</h1>
        <Row>
        <div class="radiocard">
        <br/>
        <input type="radio" name="pricing" id="card1" checked/>
        <label for="card1" className="rcard">
            <h2>Blood Group-{serviceDetails.A}</h2><br/>
            <h5>
            {serviceDetails.PA}
            </h5>
        </label>
    </div>
    
    <div class="radiocard">
    <br/>
        <input type="radio" name="pricing" id="card2" />
        <label for="card2" className="rcard">
        <h2>Blood Group-{serviceDetails.B}</h2><br/>
        <h5>
        {serviceDetails.PB}
        </h5>
        </label>
    </div>
    </Row>
    <br/>
    <Row>
    <div class="radiocard">
    <br/>
    
        <input type="radio" name="pricing" id="card3"/>
        <label for="card3" className="rcard">
        <h2>Blood Group-{serviceDetails.O}</h2><br/>
        <h5>
        {serviceDetails.PO}
        </h5>
        </label>
        </div>
        <div class="radiocard">
        <br/>
        <input type="radio" name="pricing" id="card4"/>
        <label for="card4" className="rcard">
        <h2>Blood Group-{serviceDetails.AB}</h2><br/>
        <h5>
        {serviceDetails.PAB}
        </h5>
        </label>
        </div>
        </Row>
        </>
    )
}

export default Right
