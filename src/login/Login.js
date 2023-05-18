import React, {useState} from 'react';
import "./Login.css";
import {Button, Form} from "react-bootstrap";

const Login = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        // const requestOptions = {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         email: username,
        //         password: password,
        //     })
        // }
        //
        // fetch('/Login', requestOptions)
        //     .then((data) => {
        //         console.log(data);
        //     });

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MzhmMGJjOC0yM2U4LTQwYzAtYTRjMi0zMWYyNTYyNWNkMTMiLCJlbWFpbCI6ImFkbWluQGJlZ2FhaXIuY29tIiwidW5pcXVlX25hbWUiOiJBZG1pbiBBZG1pbmlzdHJhdG9yIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjg0MzU0NjQ5LCJleHAiOjE2ODUyMTg2NDksImlhdCI6MTY4NDM1NDY0OX0.NcWP6FOOOpA2PDLthfmwWJ6FB3yJoUR_Y3YevLBGFFo";
        setToken(token);
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