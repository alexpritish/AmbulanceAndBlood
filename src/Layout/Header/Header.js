import React, {useEffect} from 'react'
import {Navbar,Container,Nav,Image} from 'react-bootstrap';
import {Link,useLocation} from 'react-router-dom';
import './Header.css';

const Header = () => {
  let location = useLocation();
  useEffect(() => {
    console.log("Location:\n",location);
    console.log("Locationpath:",location.pathname);
  }, [location]);
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className="logo" href="/" ><Image src="../../../../Images/Air.jpg" class="img-fluid"/></Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} className={ `home ${location.pathname==="/"? "active":""}`} to="/">Home</Nav.Link>
        <Nav.Link as={Link} className={ `about ${location.pathname==="/about"? "active":""}`} to="/about">About</Nav.Link>
        <Nav.Link as={Link} className={ `contact ${location.pathname==="/contact"? "active":""}`} to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} className={ `ambulance ${location.pathname==="/ambulance"? "active":""}`} to="/ambulance">Vehical Services</Nav.Link>
        <Nav.Link as={Link} className={ `blood ${location.pathname==="/blood"? "active":""}`} to="/blood">Blood Services</Nav.Link>
        </Nav>
        <Nav className="side">
        {!window.localStorage.Token ?(
          <>
        <Nav.Link as={Link} className={ `Registration ${location.pathname==="/Registration"? "active":""}`} to="/Registration">Registration</Nav.Link>
        <Nav.Link as={Link} className={ `Login ${location.pathname==="/Login"? "active":""}`} to="/Login">Login</Nav.Link>
        </>
        ): null}
        {window.localStorage.Token ?(
          <>
          <Nav.Link as={Link} className={ `logout ${location.pathname==="/logout"? "active":""}`} to="/logout">Logout</Nav.Link>
        </>
        ): null}
        </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Header
