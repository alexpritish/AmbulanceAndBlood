import React from 'react'
import './About.css'
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <>
        <div className="myabout">
        <div className="inner-section">
            <h1>About Us</h1>
            <p className="text">
            Amblex is India’s future of patient transport. Need Ambulance or Blood for your friend/family 
            member or stranger? Count on Amblex. Amblex aims to become the 911 of India for all medical needs.
             Ambulance and Blood helps save lives and AmbiPalm is at the forefront, always Racing to Save Lives. 
             Request Blood on Amblex and get blood from our vast and ever-growing list of Donors. When you 
             request for Blood, we not only connect you to Donors enlisted with Amblex, but our dedicated Help 
             Center Team will work with you, till the need is met! We are committed to help you in your moment of 
             crisis. All this is done for FREE.
            </p>
            <div className="skills">
                <button><Link to={"/contact"} className="btnb1">Contact Us</Link></button>
            </div>
        </div>
    </div>
    
    <div className="acontainer">	
    <div className="about-us">
        <div className="who-we-are">
            <h3>BRAIN BEHIND AMBLEX</h3>
            <span>Making a DIFFERENCE, DIFFERNTLY has always been our passion while growing up. Holding true to this above statement, we always envisioned of creating a feature that would not only impact the current generation but also the generations to come.</span>
        </div>
        <div className="hcards">
            <div className="hcard">
                <div className="hcard-img hcard-img1"></div>
                <div className="card-body">
                    <h3>Mr. Pritish Das</h3>
                    <span>Founder</span>
                    <p>He learnt to be the kind, humble, sincere human being he is today and to be the spiritual soul always to care and appreciate the simple things in life.He is a real estate developer.</p>
                </div>
                </div>
        
        
        <div className="hcard">
                <div className="hcard-img hcard-img2"></div>
                <div className="card-body">
                    <h3>Miss. Triyasa Kundu</h3>
                    <span>Co-Founder</span>
                    <p>She is a PhD Scholar in the field of Plant Bio-Technology. Her dream and passion is to always help others in whatever capacity possible. Like she always says “I want to be a Difference Maker”.</p>
                </div>
            </div>
        
        <div className="hcard">
                <div className="hcard-img hcard-img3"></div>
                <div className="card-body">
                    <h3>Mrs.Kriti Dutta Sen</h3>
                    <span>Managing Director</span>
                    <p>She wore the robe of ‘entrepreneur’, the first time in the year 2017 when she became the Founder Director of ASL Soft Tech Private Limited from the BPO industry. She is a positive thinker.</p>
                </div>
            </div>
        
        <div className="hcard">
                <div className="hcard-img hcard-img4"></div>
                <div className="card-body">
                    <h3>Mr.Swarnabho Das</h3>
                    <span>Development Head</span>
                    <p>All didn’t start off well when it comes to Swarnabho’s life.Due to his excruciating and demanding circumstances financially he had to start working at a very early age.He is a versatile trainer, cum life coach.</p>
                </div>
            </div>

            <div className="hcard">
                <div className="hcard-img hcard-img5"></div>
                <div className="card-body">
                    <h3>Mr. Rohit Jayswal</h3>
                    <span>Designer</span>
                    <p>Someone who looks at the bigger picture and always thinks out of the box. A task master that always pushes for perfection without compromise. These are some of the attributes that make up who Rohit is.</p>
                </div>
            </div>   
    </div>
</div>
</div>
<div className="reachus">
        <div className="inner-section2">
            <h1>Reach Us</h1>
            <h5>HEAD QUARTER:-</h5>
            <p className="text">
            Address: 19,Atul krishna banerjee lane,North 24 pgs.,kolkata- 500016.</p>
            <h5>MAIL US:-</h5>
            <p className="text">support@amblex.com</p>
            <h5>PHONE:-</h5>
            <p className="text">7003275356</p>
            
        </div>
    </div>
</>   
    
    )
}

export default About
