import React,{ useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import swal from 'sweetalert';

const Chechout = () => {
    const validateAdd=/^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/;
  const validationPhn= /^[7-9]{1}[0-9]{9}$/;
  const validateBnm=RegExp('^([a-zA-Z ]{6,20})$');

    const[inputState,setInputState]=useState({issError:{
      bnm:'',
      pad:'',
      dad:'',
      cphn:''
    }
    })
    const handleChange=(event)=>{
      event.persist();
      let {name,value} =event.target;
      let isErr={...inputState.issError}
      switch(name){
        case "bnm":
            isErr.bnm=
            validateBnm.test(value)?"":"write Full name";
            break;
        case "pad":
        isErr.pad=
        validateAdd.test(value)?"":"write in proper way";
        break;
        case "dad":
        isErr.dad=
        validateAdd.test(value)?"":"write in proper way";
        break;
        case "cphn":
          isErr.cphn=
          validationPhn.test(value)?"":"Proper way please";
        break;
        }
      setInputState({...inputState,[name]:value,issError:isErr});
      console.log("Filling",inputState);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        swal({
            title: "We will be in your pickup address as soon as possible",
            text: "Thank you",
            icon: "success",
            button: "OK",
          });
    }
    return (
        <div className="mylogin">
        <h1 className="logsd">FILL BELOW PLEASE</h1><br/>
        <Form onSubmit={submitHandler}>

        <Form.Group className="mb-3" controlId="formBasicDropAddress">
          <Form.Label className="bnm1">Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="bnm" className="bnm"  onChange={handleChange} />
          {inputState.issError.bnm.length>0 && (
            <span style={{color:'red'}}>{inputState.issError.bnm}</span>
          )}
          </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPickupAddress">
         <Form.Label className="pad1">Pickup address</Form.Label>
          <Form.Control type="text" placeholder="Enter pickup address" name="pad" className="pad"  onChange={handleChange} />
          {inputState.issError.pad.length>0 && (
            <span style={{color:'red'}}>{inputState.issError.pad}</span>
          )}
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicDropAddress">
          <Form.Label className="dad1">Drop address</Form.Label>
          <Form.Control type="text" placeholder="Enter drop address" name="dad" className="dad"  onChange={handleChange} />
          {inputState.issError.dad.length>0 && (
            <span style={{color:'red'}}>{inputState.issError.dad}</span>
          )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
         <Form.Label className="cphn">Phone</Form.Label>
          <Form.Control type="text" maxLength="10" placeholder="Enter phone number" name="cphn" className="cphn"  onChange={handleChange} />
          {inputState.issError.cphn.length>0 && (
            <span style={{color:'red'}}>{inputState.issError.cphn}</span>
          )}
        </Form.Group>
        
        <center><Button variant="primary" type="submit">
          Done
        </Button></center>
      </Form>
        </div>
    )
}

export default Chechout
