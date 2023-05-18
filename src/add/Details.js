import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import useToken from "../utils/useToken";

const Details = (props) => {
    const [flightNumber, setFlightNumber] = useState("");
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [seat, setSeat] = useState(0);
    const [price, setPrice] = useState(0);
    const [departureTime, setDepartureTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const {token, setToken} = useToken();

    const handleAdd = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                departureLocation: departure,
                arrivalLocation: arrival,
                seats: seat,
                price: price,
                departureTime: "2023-05-19T19:51:26.037Z",
                arrivalTime: "2023-05-19T20:51:26.037Z",
                serviceStartDate: "2023-05-18T19:51:26.037Z",
                serviceEndDate: "2023-05-23T19:51:26.037Z",
            })
        }

        fetch("/Flight", requestOptions)
            .then((data) => {
                props.handleClose();

            });
    }

    const handleUpdate = () => {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: props.flight.id,
                departureLocation: departure ? departure : props.flight.departureLocation,
                arrivalLocation: arrival ? arrival : props.flight.arrivalLocation,
                seats: seat ? seat : props.flight.seats,
                price: price ? price : props.flight.price,
                departureTime: "2023-05-19T19:51:26.037Z",
                arrivalTime: "2023-05-19T20:51:26.037Z",
                serviceStartDate: "2023-05-18T19:51:26.037Z",
                serviceEndDate: "2023-05-23T19:51:26.037Z",
            })
        }

        fetch("/Flight", requestOptions)
            .then((data) => {
                props.handleClose();
            });
    }

    return(
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.type === "add" ? "Details a flight" : "Details for flight " + props.flight.id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Flight Number</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Flight number"
                                      defaultValue={props.type === "update" ? props.flight.id : ""}
                                      onChange={e => setFlightNumber(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Departure</Form.Label>
                        <Form.Control placeholder="Departure"
                                      defaultValue={props.type === "update" ? props.flight.departureLocation : ""}
                                      onChange={e => setDeparture(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Arrival</Form.Label>
                        <Form.Control placeholder="Arrival"
                                      defaultValue={props.type === "update" ? props.flight.arrivalLocation : ""}
                                      onChange={e => setArrival(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control placeholder="Start date"
                                      defaultValue={props.type === "update" ? props.flight.serviceStartDate : ""}
                                      onChange={e => setStart(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>End date</Form.Label>
                        <Form.Control placeholder="End date"
                                      defaultValue={props.type === "update" ? props.flight.serviceEndDate : ""}
                                      onChange={e => setEnd(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Seat capacity</Form.Label>
                        <Form.Control placeholder="Seat capacity"
                                      defaultValue={props.type === "update" ? props.flight.seats : ""}
                                      onChange={e => setSeat(parseInt(e.target.value))}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Price</Form.Label>
                        <Form.Control placeholder="Price"
                                      defaultValue={props.type === "update" ? props.flight.price : ""}
                                      onChange={e => setPrice(parseInt(e.target.value))}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Departure time</Form.Label>
                        <Form.Control placeholder="Departure time"
                                      defaultValue={props.type === "update" ? props.flight.departureTime : ""}
                                      onChange={e => setDepartureTime(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Arrival time</Form.Label>
                        <Form.Control placeholder="Arrival time"
                                      defaultValue={props.type === "update" ? props.flight.arrivalTime : ""}
                                      onChange={e => setArrivalTime(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    props.type === "add" ? handleAdd() : handleUpdate();
                }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Details;