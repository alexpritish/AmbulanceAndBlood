import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <footer class="footer">
        <div class="l-footer">
        <h1>
        <img src="../../../../Images/Air.jpg" alt=""/></h1>
        <p>
        Amblex is India’s future of patient transport. Need Ambulance or Blood for your friend/family member or stranger? Count on Amblex. Amblex aims to become the 911 of India for all medical needs.</p>
        </div>
        <ul class="r-footer">
        <li>
          <h2 className="legal">
        Social</h2>
        <ul class="box">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Pinterest</a></li>
        <li><a href="#">Dribbble</a></li>
        </ul>
        </li>
        <li class="features">
          <h2 className="legal">
        Information</h2>
        <ul class="box h-box">
        <li><a href="#">Blog</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Sales</a></li>
        <li><a href="#">Tickets</a></li>
        <li><a href="#">Certifications</a></li>
        <li><a href="#">Customer Service</a></li>
        </ul>
        </li>
        <li>
          <h2 className="legal">
        Legal</h2>
        <ul class="box">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Contract</a></li>
        </ul>
        </li>
        </ul>
        <div class="b-footer">
        <p>All rights reserved by ©Amblex 2022 </p>
        <p>Designed by- Pritish Das on memory of Didu and bhaitu</p>
        </div>
        </footer>
        </div>
    )
}

export default Footer
