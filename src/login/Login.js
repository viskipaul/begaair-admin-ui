import React, {useState} from 'react';
import "./Login.css";
import {Button, Form} from "react-bootstrap";

const Login = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                email: username,
                password: password,
            })
        }

        fetch('https://identitymicroservice.azurewebsites.net/api/auth/Login', requestOptions)
            .then((data) => {
                return data.json();
            })
            .then(data => {
                if (data.hasOwnProperty("token")) {
                    setToken(data.token)
                }
            });
    }

    return(
        <div className="login-form">
            <div className="login-button-wrapper">
                <h2>BegaAir Admin Console</h2>
            </div>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </Form.Group>

                <div className="login-button-wrapper">
                    <Button variant="primary" className="login-button" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login;