import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Place from "../Place/Place";

const Places = () => {
  const [places, setPlaces] = useState([]);
  // fetching for api
  useEffect(() => {
    fetch("https://frozen-scrubland-07900.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div>
      {/* checking length  */}
      {places.length ? (
        <Row xs={1} md={3} className="g-4 container mx-auto">
          {places.map((place) => (
            <Place key={place._id} place={place}></Place>
          ))}
        </Row>
      ) : (
        // if data not loaded the spinner will shown
        <Spinner className="mt-5" animation="grow" />
      )}
    </div>
  );
};

export default Places;
