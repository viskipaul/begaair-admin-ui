import React, {useEffect, useState} from 'react';
import {mockFlights} from "../utils/flights";
import Flight from "../flight/Flight";
import ListGroup from "react-bootstrap/ListGroup";
import "./Main.css";
import {Button} from "react-bootstrap";
import {IoAddCircleOutline} from "react-icons/io5";
import Details from "../add/Details";
import useToken from "../utils/useToken";

const Main = () => {
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [flight, setFlight] = useState(mockFlights[0]);
    const [flights, setFlights] = useState([]);
    const {token} = useToken();

    const handleClose = () => {
        setShow(false);
        fetchFlightsData();
    };

    const handleShow = (flight) => {
        setFlight(flight);
        setShow(true);
    }

    const handleShowAdd = () => {
        setShowAdd(true);
    }

    const handleCloseAdd = () => {
        setShowAdd(false);
        fetchFlightsData();
    }

    const handleDelete = (flight) => {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        fetch("https://ticketsmanagementmicroservice.azurewebsites.net/Flight?id=" + flight.id, requestOptions)
            .then(() => {
                fetchFlightsData();
            })
    }

    const fetchFlightsData = () => {
        const headers = { 'Authorization': 'Bearer ' + token };

        fetch("https://ticketsmanagementmicroservice.azurewebsites.net/Flight", {headers})
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setFlights(data);
            })
    }

    useEffect(() => {
        fetchFlightsData();
    })

    const results = [];
    flights.forEach((flight) => {
        results.push(
            <Flight item={flight} onDetails={() => handleShow(flight)} onDelete={() => handleDelete(flight)} />
        )
    })

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