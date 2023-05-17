import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const Details = (props) => {
    const [flightNumber, setFlightNumber] = useState("");
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [seat, setSeat] = useState("");
    const [price, setPrice] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");

    return(
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.type === "add" ? "Details a flight" : "Details for flight " + props.flight.flightNumber}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Flight Number</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Flight number"
                                      defaultValue={props.type === "update" ? props.flight.flightNumber : ""}
                                      onChange={e => setFlightNumber(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Departure</Form.Label>
                        <Form.Control placeholder="Departure"
                                      defaultValue={props.type === "update" ? props.flight.departure : ""}
                                      onChange={e => setDeparture(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Arrival</Form.Label>
                        <Form.Control placeholder="Arrival"
                                      defaultValue={props.type === "update" ? props.flight.arrival : ""}
                                      onChange={e => setArrival(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control placeholder="Start date"
                                      defaultValue={props.type === "update" ? props.flight.startDate : ""}
                                      onChange={e => setStart(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>End date</Form.Label>
                        <Form.Control placeholder="End date"
                                      defaultValue={props.type === "update" ? props.flight.endDate : ""}
                                      onChange={e => setEnd(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Seat capacity</Form.Label>
                        <Form.Control placeholder="Seat capacity"
                                      defaultValue={props.type === "update" ? props.flight.seatCapacity : ""}
                                      onChange={e => setSeat(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>Price</Form.Label>
                        <Form.Control placeholder="Price"
                                      defaultValue={props.type === "update" ? props.flight.price : ""}
                                      onChange={e => setPrice(e.target.value)}/>
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
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Details;