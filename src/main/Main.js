import React, {useCallback, useEffect, useState} from 'react';
import {mockFlights} from "../utils/flights";
import Flight from "../flight/Flight";
import ListGroup from "react-bootstrap/ListGroup";
import "./Main.css";
import {Button} from "react-bootstrap";
import {IoAddCircleOutline} from "react-icons/io5";
import Details from "../add/Details";
import useToken from "../utils/useToken";
import {Bars} from "react-loader-spinner";

const Main = () => {
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [flight, setFlight] = useState(mockFlights[0]);
    const [flights, setFlights] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
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

    const fetchFlightsData = useCallback(() => {
        const headers = { 'Authorization': 'Bearer ' + token };
        setShowLoader(true);
        fetch("https://ticketsmanagementmicroservice.azurewebsites.net/Flight", {headers})
            .then(response => {
                return response.json();
            })
            .then(data => {
                setFlights(data);
                setShowLoader(false);
            })
    }, [token]);

    useEffect(() => {
        fetchFlightsData();
    }, [fetchFlightsData])

    const results = [];
    flights.forEach((flight) => {
        results.push(
            <Flight key={flight.id} item={flight} onDetails={() => handleShow(flight)} onDelete={() => handleDelete(flight)} />
        )
    })

    return(
        <div className="main-page">
            <Details show={show} handleClose={() => handleClose()} flight={flight} type="update"/>
            <Details show={showAdd} handleClose={() => handleCloseAdd()} flight={flight} type="add"/>

            <div className="button-loader-wrapper">
                <Button variant="success" className="add-button" onClick={() => handleShowAdd()}>
                    <IoAddCircleOutline className="button-icon"/>
                    Add a flight
                </Button>
                <Bars height="40" width="80" color="blue" ariaLabel="bars-loading" visible={showLoader} wrapperClass="loader"/>
            </div>

            <ListGroup key="md" className="my-2">
                {results}
            </ListGroup>
        </div>
    )
}

export default Main;