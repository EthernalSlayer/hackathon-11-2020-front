import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CityList from "./CityList";
import cities from "../ressources/cities";

const Home = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [arrival, setArrival] = useState("test1");
  const [departure, setDeparture] = useState("test2");

  function handleChangeDeparture(e) {
    let data = e.target.value;
    setDeparture(data);
  }
  function handleChangeArrival(e) {
    let data = e.target.value;
    setArrival((prev) => (prev = data));
  }
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Form.Group>
            <Form.Row>
              <Form.Label column htmlFor="Departure">
                Departure
              </Form.Label>
              <Col xs="auto">
                <Form.Control
                  as="select"
                  value={departure}
                  onChange={handleChangeDeparture}
                >
                  {cities.map((city) => {
                    return <option key={city.name}>{city.name}</option>;
                  })}
                </Form.Control>
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column htmlFor="arrival">
                Arrival
              </Form.Label>
              <Col xs="auto">
                <Form.Control
                  as="select"
                  value={arrival}
                  onChange={handleChangeArrival}
                >
                  {cities.map((city) => {
                    return <option key={city.name}>{city.name}</option>;
                  })}
                </Form.Control>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column="sm" lg={2}>
                Date
              </Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Row>

            <Link
              to={{
                pathname: "/Score",
                cities: { arrival: arrival, departure: departure },
              }}
            >
              <Button variant="info" style={{ backgroundColor: "black" }}>
                VALIDER
              </Button>
            </Link>
          </Form.Group>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
