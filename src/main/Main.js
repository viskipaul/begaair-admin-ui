import React from 'react';
import {mockFlights} from "../utils/flights";
import Flight from "../flight/Flight";
import ListGroup from "react-bootstrap/ListGroup";
import "./Main.css";
import {Button} from "react-bootstrap";
import {IoAddCircleOutline} from "react-icons/io5";

const Main = (props) => {

    const results = [];
    mockFlights.forEach((flight) => {
        results.push(

            <Flight item={flight} />
        );
    });

    return(
        <div className="main-page">
            <Button variant="success" className="add-button">
                <IoAddCircleOutline className="button-icon"/>
                Add a flight
            </Button>
            <ListGroup key="md" className="my-2">
                {results}
            </ListGroup>
        </div>
    )
}

export default Main;