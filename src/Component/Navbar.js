import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavMenu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{margin:'1rem',alignItems:"center"}}>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home"style={{padding:'1rem',alignItems:"center"}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{padding:'1rem'}}>Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavMenu;