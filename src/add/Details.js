import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import useToken from "../utils/useToken";
import moment from "moment";

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
    const {token} = useToken();

    const handleAdd = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                flightNumber: flightNumber,
                departureLocation: departure,
                arrivalLocation: arrival,
                seats: seat,
                price: price,
                departureTime: departureTime,
                arrivalTime: arrivalTime,
                serviceStartDate: start,
                serviceEndDate: end,
            })
        }

        fetch("https://ticketsmanagementmicroservice.azurewebsites.net/Flight", requestOptions)
            .then((data) => {
                props.handleClose();

            });
    }

    const handleUpdate = () => {
        console.log("UPDATE TOKEN: ", token);
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                flightNumber: flightNumber ? flightNumber : props.flight.flightNumber,
                id: props.flight.id,
                departureLocation: departure ? departure : props.flight.departureLocation,
                arrivalLocation: arrival ? arrival : props.flight.arrivalLocation,
                seats: seat ? seat : props.flight.seats,
                price: price ? price : props.flight.price,
                departureTime: departureTime ? departureTime : props.flight.departureTime,
                arrivalTime: arrivalTime ? arrivalTime : props.flight.arrivalTime,
                serviceStartDate: start ? start : props.flight.serviceStartDate,
                serviceEndDate: end ? end : props.flight.serviceEndDate
            })
        }

        fetch("https://ticketsmanagementmicroservice.azurewebsites.net/Flight", requestOptions)
            .then((data) => {
                props.handleClose();
            });
    }

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
                        <Form.Control placeholder="Flight number"
                                      defaultValue={props.type === "update" ? props.flight.flightNumber : ""}
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
                        <Form.Control type="date"
                                      placeholder="Start date"
                                      defaultValue={props.type === "update" ? moment(props.flight.serviceStartDate).format("YYYY-MM-DD") : ""}
                                      onChange={e => {
                                          const date = moment(e.target.value, "YYYY-MM-DD").toISOString();
                                          setStart(date);
                                      }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlFlightNumber">
                        <Form.Label>End date</Form.Label>
                        <Form.Control type="date"
                                      placeholder="End date"
                                      defaultValue={props.type === "update" ? moment(props.flight.serviceEndDate).format("YYYY-MM-DD") : ""}
                                      onChange={e => {
                                          const date = moment(e.target.value, "YYYY-MM-DD").toISOString();
                                          setEnd(date);
                                      }}/>
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