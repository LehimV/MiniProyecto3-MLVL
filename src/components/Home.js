import React, { useState } from "react";
import data from "../assets/stays.json";

import Card from "./Card";
import Title from "./Title";
import Form from "./Form";
import Navbar from "./Navbar";

export default function Home() {
  const [filtered, setFiltered] = useState(data);
  const [showModal, setShowModal] = useState(false);

  //Cards de los alojamientos
  let cards = filtered.map((item) => (
    <Card
      image={item.photo}
      superhost={item.superHost}
      title={item.title}
      rating={item.rating}
      beds={item.beds}
      type={item.type}
    />
  ));

  //Actualizar el filtrado de ciudades y huspedes
  const handleSearch = (selectCity, totalCount) => {
    const result = data.filter(
      (item) => item.city + ", Finland" === selectCity && item.maxGuests > totalCount
    );
    setFiltered(result);
    setShowModal(false);
  };

  //Ocultar o mostrar el Modal de From.js
  const checkSearch = (search) => {
    setShowModal(search);
  };

  return (
    <main className="container">
      <Navbar onSearch={handleSearch} dropSearch={checkSearch} />
      {showModal && <Form onSearch={handleSearch} onClose={() => setShowModal(false)} />}
      <Title count={cards.length} />
      <div className="row">{cards.length === 0 ? <p>Sorry, there are no stays</p> : cards}</div>
    </main>
  );
}
