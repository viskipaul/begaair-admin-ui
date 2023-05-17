import React, {useEffect, useState} from 'react';
import {mockFlights} from "../utils/flights";
import Flight from "../flight/Flight";
import ListGroup from "react-bootstrap/ListGroup";
import "./Main.css";
import {Button} from "react-bootstrap";
import {IoAddCircleOutline} from "react-icons/io5";
import Details from "../add/Details";
import useToken from "../utils/useToken";

const Main = (props) => {
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [flight, setFlight] = useState(mockFlights[0]);
    const [flights, setFlights] = useState([]);

    const handleClose = () => setShow(false);

    const handleShow = (flight) => {
        setFlight(flight);
        setShow(true);
    }

    const handleShowAdd = () => {
        setShowAdd(true);
    }

    const handleCloseAdd = () => {
        setShowAdd(false);
    }

    const handleDelete = (flight) => {
        console.log("Delete flight: ", flight);
    }

    const fetchFlightsData = () => {
        console.log("Fetching data...")
        fetch("https://192.168.1.7/Flight")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setFlights(data);
                console.log(flights);
            })
    }

    useEffect(() => {
        fetchFlightsData();
    }, [])

    const results = [];
    mockFlights.forEach((flight) => {
        results.push(
            <Flight item={flight} onDetails={() => handleShow(flight)} onDelete = {() => handleDelete(flight)}/>
        );
    });

    return(
        <div className="main-page">
            <Details show={show} handleClose={() => handleClose()} flight={flight} type="update"/>
            <Details show={showAdd} handleClose={() => handleCloseAdd()} flight={flight} type="add"/>

            <Button variant="success" className="add-button" onClick={() => handleShowAdd()}>
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