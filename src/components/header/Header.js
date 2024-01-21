import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg='black' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href="/" className="text-primary">
          <FontAwesomeIcon icon={faVideoSlash}> </FontAwesomeIcon>Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
        
        <Navbar.Collapse id="navbarScroll">
            <Nav className='me-auto my-2 my-lg-0' style={{maxHeight: '100px' }} navbarScroll>
                <NavLink className="nav-link" to='/'>Home</NavLink>
                <NavLink className="nav-link" to='/watchList'>Watch List</NavLink>
            </Nav>
            <Button variant="outline-light" className="me-2">SignIn</Button>
            <Button variant="outline-primary">SignUp</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header