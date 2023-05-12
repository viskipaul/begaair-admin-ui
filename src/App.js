import Main from "./main/Main";
import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {IoAirplaneOutline, IoLogOutOutline} from "react-icons/io5";
import "./App.css";

function App() {
  return (
      <div>
          <Navbar bg="primary" variant="dark" expand="lg">
              <Container fluid>
                  <Navbar.Brand href="#home" className="brand-text">
                      <IoAirplaneOutline className="brand-icon" />BegaAir Admin Console
                  </Navbar.Brand>
                  <Nav className="justify-content-end">
                      <Nav.Link href="/logout">
                          <IoLogOutOutline className="brand-icon" />
                          Logout
                      </Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
        <Main />
      </div>
  );
}

export default App;
