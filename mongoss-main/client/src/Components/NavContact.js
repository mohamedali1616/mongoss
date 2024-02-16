import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavContact=()=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ContactList</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/ListContact'>Contacts</Nav.Link>
            <Nav.Link as={Link} to='/AddContact'>Add Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
     
    )
}

export default NavContact