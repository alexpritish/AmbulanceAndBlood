import axios from 'axios';
import React,{ useState } from 'react';
import {Form,Row,Button,Col} from 'react-bootstrap';
import {useNavigate}from 'react-router-dom';
import swal from 'sweetalert';
import './Registration.css';

function Registration() {
const navigate=useNavigate();

const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
const validationPwd=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
const validateFname=RegExp('^([a-zA-Z ]{6,20})$');
  const[inputState,setInputState]=useState({isError:{
    email:'',
    password:'',
    username:'',
  }})
  
  const handleChange=(event)=>{
    event.persist();
    let {name,value} =event.target;
    let isErr={...inputState.isError}
    switch(name){
        case "email":
        isErr.email=
        validateEmail.test(value)?"":"Wrong Pattern pattern should be like this:abcdef@abc.abc";
        break;
        case "password":
        isErr.password=
        validationPwd.test(value)?"":"Wrong Syntax,should contain at least one upper case ,one lower case ,one Special character ,one digit and must be at least 8 characters in length";
        break;
        case "username":
        isErr.username=
        validateFname.test(value)?"":"Use minimum 6 character ";
        break;
                       
      }
    setInputState({...inputState,[name]:value,isError:isErr});
    console.log("Filling",inputState);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    console.log("aftersubmit",inputState);
    let user ={
      username:inputState.username,
      email:inputState.email,
      password:inputState.password
    }
    console.log("user: ",user);
    axios.post('https://project-node-1.herokuapp.com/postUserData',user)
    .then(res=>{
      console.log("axios data",res);
      navigate("/Login");
      swal({
        title: "Successfully registar,please login to continue",
        text: "Thank you",
        icon: "success",
        button: "OK",
      });
    })
    .catch(err=>{
      console.warn("error",err);
      navigate("/Registration");
      swal({
        title: "Looks like you are an user already,please login",
        text: "click on login in top right corner",
        icon: "warning",
        button: "OK",
      });
    })
  }
    return (
        <div className="myregistration">
        <h1 className="logsd">Registration here</h1><br/>
        <Form onSubmit={submitHandler}>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Eneter your  full name" name="username" onChange={handleChange}/>
          {inputState.isError.username.length>0 && (
            <span style={{color:'red'}}>{inputState.isError.username}</span>
          )}
        </Form.Group>
        
      </Row>
     
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
            {inputState.isError.email.length>0 && (
            <span style={{color:'red'}}>{inputState.isError.email}</span>
            )}
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Enter a strong Password" name="password" onChange={handleChange} />
            {inputState.isError.password.length>0 && (
              <span   style={{color:'red'}}>{inputState.isError.password}</span>
            )}
          </Form.Group>
        </Row>
    
        <Row>

      </Row>
      
        
      <br/>
        <center><Button variant="primary" type="submit">
          Submit
        </Button></center>
      </Form>
      <h6>already a user? <a href="/Login" className="rocky">Click here</a></h6>
        </div>
    )
}

export default Registration

