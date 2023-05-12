import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Flight.css";
import {FaPlaneArrival, FaPlaneDeparture, FaRegClock} from "react-icons/fa";
import {Button} from "react-bootstrap";

const Flight = (props) => {
    return(
        <div>
            <ListGroup.Item className="flight-item d-flex justify-content-between align-items-center">
                <div class="flight-number">
                    {props.item.flightNumber}
                </div>
                <div class="destinations-group">
                    <FaPlaneDeparture className="inline-icon" />
                    {props.item.departure}
                    <span class="separator-limit">-</span>
                    <FaPlaneArrival className="inline-icon" />
                    {props.item.arrival}
                </div>
                <div className="time-group">
                    <FaRegClock className="inline-icon" />
                    {props.item.departureTime}
                    <span class="separator-limit">-</span>
                    {props.item.arrivalTime}
                </div>
                <div className="buttons-group">
                    <Button variant="primary" className="details-button">Details</Button>
                    <Button variant="danger">Delete flight</Button>
                </div>
            </ListGroup.Item>
        </div>
    )
}

export default Flight;