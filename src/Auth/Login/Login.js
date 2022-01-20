import axios from 'axios';
import React,{ useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import './Login.css'
import swal from 'sweetalert';

function Login() {
  const navigate= useNavigate();  
  const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
  const validationPwd=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');

    const[inputState,setInputState]=useState({issError:{
      email:'',
      password:''
    }
    })
    const handleChange=(event)=>{
      event.persist();
      let {name,value} =event.target;
      let isErr={...inputState.issError}
      switch(name){
        case "email":
        isErr.email=
        validateEmail.test(value)?"":"Write the email which you entered at the time of registration";
        break;
        case "password":
          isErr.password=
          validationPwd.test(value)?"":"Write the password which you entered at the time of registration";
        break;
        }
      setInputState({...inputState,[name]:value,issError:isErr});
      console.log("Filling",inputState);
    }
    const submitHandler=(event)=>{
      event.preventDefault();
      console.log("aftersubmit",inputState);
      let userLogin={
        email:inputState.email,
        password:inputState.password
      }
      console.log("userLogin",userLogin);
      axios.post('https://project-node-1.herokuapp.com/postLoginData',userLogin)
      .then(res=>{
        console.log("data: ", res);
        window.localStorage.setItem("Token",res.data.token);
        navigate("/ambulance");
        swal({
          title: "Successfully loggedIn,Now you have more access",
          text: "Thank you",
          icon: "success",
          button: "OK",
        });
      })
      .catch(err=>{
        console.log("error",err);
        navigate("/Login");
        swal({
          title: "Could not login",
          text: "Try again or register",
          icon: "error",
          button: "OK",
        });
      })
    }
    return (
        <div className="mylogin">
        <h1 className="logsd">Login here</h1><br/>
        <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className="eml1">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" className="lemail" onChange={handleChange} />
          {inputState.issError.email.length>0 && (
            <span style={{color:'red'}}>{inputState.issError.email}</span>
          )}
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="pwd1">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
          {inputState.issError.password.length>0 && (
            <span style={{color:'red'}}>{inputState.issError.password}</span>
          )}
          </Form.Group>
        
        <center><Button variant="primary" type="submit">
          Login
        </Button></center>
      </Form>
      <h6>new user? <a href="/Registration" className="rocky">Click here</a></h6>
      </div>
    )
}

export default Login
