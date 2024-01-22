import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" style={{backgroundColor: "#0d0d0d" }}>
      <Container fluid className="px-4">
        <Navbar.Brand href="/" className="text-primary fs-2">
          <FontAwesomeIcon icon={faVideoSlash}> </FontAwesomeIcon>Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-4 my-lg-0 fs-5" style={{maxHeight: "100px" }} navbarScroll>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
            </Nav>
            <Button variant="outline-light fs-5" className="me-2">SignIn</Button>
            <Button variant="outline-light fs-5">SignUp</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header