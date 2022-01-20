import React,{lazy,Suspense,useState,useEffect} from 'react'
import {Route,Routes,BrowserRouter as Router,Navigate} from 'react-router-dom';
import Home from '../Components/Home/Home';
import Contact from '../Components/Contact/Contact';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import { PNF } from '../Components/PNF/PNF';

import Registration from '../Auth/Registration/Registration';
import Login from '../Auth/Login/Login';
import Vehical from '../Services/Vehical/Vehical';
import Sub_Vehical from '../Services/Sub_Vehical/Sub_Vehical';
import Che_Vehical from '../Services/Che_Vehical/Che_Vehical';
import First from '../Blood/FirstStep/First';
import Second from '../Blood/SecondStep/Second';
import Third from '../Blood/Third/Third';
import IsAuth from './isAuth';
import Logout from '../Auth/Logout/Logout';
import Chechout from '../Services/Checkout/Chechout';
import Protected from './Protected';


const About=lazy(()=>import('../Components/About/About'));

function Routing() {
    return (
        <Router>
        <Header/>
        <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/auth" element={<IsAuth/>}/>
            
        <Route element={<Protected/>}>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
            <Route path="/blood" element={<First/>}></Route>
            <Route path="/subblood/:blood_id" element={<Second/>}></Route>
            <Route path="/bloodenquiary/:blood_id/:sub_id" element={<Third/>}></Route>
            </Route>
        
        <Route path="/ambulance" element={<Vehical/>}></Route>
        <Route path="/subvehical/:service_id" element={<Sub_Vehical/>}></Route>
        <Route path="/enquiary/:service_id/:sub_id" element={<Che_Vehical/>}/>
        <Route path="/Checkout" element={<Chechout/>}></Route>

        
        

        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Registration" element={<Registration/>}></Route>
        
        <Route path="*" element={<Navigate to={<PNF/>}/>}/>
        </Routes>
        </Suspense>
        <Footer/>
        </Router>
    )
}
export default Routing 
