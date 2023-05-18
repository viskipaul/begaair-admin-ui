import Main from "./main/Main";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {IoAirplaneOutline, IoLogOutOutline} from "react-icons/io5";
import "./App.css";
import Login from "./login/Login";
import useToken from "./utils/useToken";

function App() {
    const {token, setToken} = useToken();

    if (token === "") {
        return(
            <Login setToken={setToken} />
        )
    }

    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home" className="brand-text">
                        <IoAirplaneOutline className="brand-icon" />BegaAir Admin Console
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link>
                            <Button onClick={() => setToken("")}>
                                <IoLogOutOutline className="brand-icon" />
                                Logout
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Main />
        </div>
    );
}

export default App;
