import React from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import './Contact.css';
import swal from 'sweetalert';



const ValidateContact = (formValue) => {
const reg_exp1=/^[a-zA-Z]{2,10}$/
const reg_exp2=/^[7-9]{1}[0-9]{9}$/
const reg_exp3=/^[0-9]{6,6}$/
    const errors={};
    if(!formValue.fname){
        errors.fname="Please enter your first name."
    }else if(!reg_exp1.test(formValue.fname)){
        errors.fname="Only characters"
     }else if(formValue.fname.length<3){
        errors.fname="minimum 3 character required.";
    }else if(formValue.fname.length>10){
        errors.fname="maximum 10 character.";
    }

    if(!formValue.lname){
        errors.lname="Please enter your last name."
    }else if(!reg_exp1.test(formValue.lname)){
        errors.lname="Only characters."
    }else if(formValue.lname.length<3){
        errors.lname="minimum 3 character required.";
    }else if(formValue.lname.length>7){
        errors.lname="maximum 7 character.";
    }

    if(!formValue.phone){
        errors.phone="Please enter your Phone Number."
    }else if(!reg_exp2.test(formValue.phone)){
        errors.phone="Enter 10 digits start with 7,8 or 9."
    }

    if(!formValue.city){
        errors.city="Please enter your city.";
    }else if(!reg_exp1.test(formValue.city)){
        errors.city="Only characters."
    }else if(formValue.city.length<3){
        errors.city="minimum 3 character required.";
    }else if(formValue.city.length>8){
        errors.city="maximum 8 character.";
    }

    if(!formValue.pin){
        errors.pin="Please enter your Pin."
    }else if(!reg_exp3.test(formValue.pin)){
        errors.pin="Only Numbers with 6 digits."
    }
    

    console.log("Errors: ",errors);
    return errors;
}

function Contact() {
    //step1
    const formik=useFormik({
        initialValues:{
            fname:'',
            lname:'',
            phone:'',
            city:'',
            pin:''
        },
        validate:ValidateContact,
        onSubmit:(values)=>{
            console.log("Received values:", values);
            axios.post('https://jsonplaceholder.typicode.com/users',values)
            .then(res=>{
                console.log("Axios response: ",res);
                swal({
                    title: "We will get back to you shortly",
                    text: "Thank you",
                    icon: "success",
                    button: "OK",
                  });
            })
            .catch(err=>{
                console.warn("Axois error: ",err);
            })
            
        }
        
    })
    console.log("formik")
    return (
        
        <div className="myForm">
    <form onSubmit={formik.handleSubmit}>
    <br/>
        <h1 className="contactus">Contact Us</h1><br/>
        <div class="main">
        <label className="inp" for="fname">First Name</label>
        <input type="text"  name="fname" value={formik.values.fname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <br/>{formik.touched.fname && formik.errors.fname?
        (<span style={{color:'red'}}>{formik.errors.fname}</span>):null}
       
        <label className="inp" for="lnamme">Last Name</label>
        <input type="text"  name="lname" value={formik.values.lname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <br/>{formik.touched.lname && formik.errors.lname?
            (<span style={{color:'red'}}>{formik.errors.lname}</span>):null}
       
        <label className="inp" for="Phone">Phone Number</label>
        <input type="text"  name="phone" maxLength="10" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <br/>{formik.touched.phone && formik.errors.phone?
            (<span style={{color:'red'}}>{formik.errors.phone}</span>):null}
       
        <label className="inp" for="Password">City</label>
        <input type="text" name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <br/>{formik.touched.city && formik.errors.city?
            (<span style={{color:'red'}}>{formik.errors.city}</span>):null}
       
        <label className="inp" for="pin">Pin</label>
        <input type="text"  name="pin" maxLength="6" value={formik.values.pin} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <br/>{formik.touched.pin && formik.errors.pin?
            (<span style={{color:'red'}}>{formik.errors.pin}</span>):null}

        <label className="inp" for="message">Message</label>
        <input type="text"  className="msg" minLength="6" />
        <br/>
        </div>
        <br/>
        <button type="Submit" value="Submit" className="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</button>
        <br/><br/>
    </form>
     </div>
    )
}

export default Contact
