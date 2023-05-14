import React, { useState } from "react";
import search from "../assets/search-white.svg";
import data from "../assets/stays.json";
import classes from "./Form.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Form({ onSearch, onClose }) {
  const [query, setQuery] = useState("");
  const [guests, setGuests] = useState({ adults: 0, children: 0 });

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const cityData = [...new Set(data.map((item) => item.city + ", Finland"))];

  const handleCounterChange = (type, value) => {
    const updatedGuests = { ...guests, [type]: guests[type] + value };
    setGuests(updatedGuests);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query, guests.adults + guests.children);
    onClose(); // Cerrar el modal
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Search Stays</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSearch} className={classes.form}>
          <select value={query} onChange={handleInputChange}>
            {cityData.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className={classes.age}>
            <input type="text" value={`${guests.adults + guests.children} guests`} readOnly />
            <div>
              {Object.entries(guests).map(([type, count]) => (
                <div className={classes.ageCont} key={type}>
                  <h2>{type === "adults" ? "Adults" : "Children"}</h2>
                  <p>{type === "adults" ? "Ages 13 or above" : "Ages 2 - 12"}</p>
                  <button type="button" onClick={() => handleCounterChange(type, -1)}>
                    -
                  </button>
                  <span>{count}</span>
                  <button type="button" onClick={() => handleCounterChange(type, 1)}>
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className={classes.button}>
            <img src={search} alt="search-icon" /> Search
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
