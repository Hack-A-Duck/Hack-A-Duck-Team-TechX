import {Card, Nav, NavDropdown}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import image from './img.jpg';
function App() {
  return (
    //code for requests in admin 
<div>
  <div className= "Nav">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant= 'dark' >
  <Navbar.Brand href="#home">Admin</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Accepted Requests</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Rejected Requests</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#LoginPageLinkTo-be-put">
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>
  
<Card className="text-center" bg ="warning" variant= 'dark'>
  <Card.Header>Request</Card.Header>
  <Card.Body>
    <Card.Title>Prabhat Charitable Trust- Ngo1</Card.Title>
    <Card.Text><i>We are in need of clothes.</i>
       
    </Card.Text>
    <a href="#" className= "btn btn-outline-success" >Accept</a>{'  '}
    <a href="#" className= "btn btn-outline-danger">Reject</a>
    
  </Card.Body>
  <Card.Footer className="text-muted">Today</Card.Footer>
</Card>

  {/* <Card.Link href="#">More Information</Card.Link> */}
  
<Card className="text-center">
  <Card.Header>Request</Card.Header>
  <Card.Body>
    <Card.Title>NGO-2</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <a href="#" className= "btn btn-outline-success">Accept</a>{' '}
    <a href="#" className= "btn btn-outline-danger">Reject</a>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>

<Card className="text-center" bg ="warning" >
  <Card.Header>Request</Card.Header>
  <Card.Body>
    <Card.Title>NGO-3</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <a href="#" className= "btn btn-outline-success">Accept</a>{' '}
    <a href="#" className= "btn btn-outline-danger">Reject</a>
  </Card.Body>
  <Card.Footer className="text-muted">6days ago</Card.Footer>
</Card>

<Card className="text-center">
  <Card.Header>Request</Card.Header>
  <Card.Body>
    <Card.Title>NGO-4</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <a href="#" className= "btn btn-outline-success">Accept</a>{' '}
    <a href="#" className= "btn btn-outline-danger">Reject</a>
  </Card.Body>
  <Card.Footer className="text-muted">A week ago</Card.Footer>
</Card>

<Card className="text-center" bg ="warning" >
  <Card.Header>Request</Card.Header>
  <Card.Body>
    <Card.Title>NGO-5</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <a href="#" className= "btn btn-outline-success">Accept</a>{' '}
    <a href="#" className= "btn btn-outline-danger">Reject</a>
  </Card.Body>
  <Card.Footer className="text-muted">10 days ago</Card.Footer>
</Card>

<Card className="text-center">
  <Card.Header>Request</Card.Header>
  <Card.Body>
    <Card.Title>NGO-6</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <a href="#" className= "btn btn-outline-success">Accept</a>{' '}
    <a href="#" className= "btn btn-outline-danger">Reject</a>
  </Card.Body>
  <Card.Footer className="text-muted">1 month ago</Card.Footer>
</Card>
</div>

  );

}

export default App;
