//import React, { useState } from "react";
import React from "react";
import logo from "../assets/logo.svg";
//import Form from "./Form";

export default function Navbar({ dropSearch }) {
  const handleOpenModal = () => {
    dropSearch(true);
  };

  return (
    <header className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-lg-4 mt-3 gap-5">
      <div className="d-flex align-self-start align-self-md-center">
        <img src={logo} alt="logo" />
      </div>

      <article className="d-flex rounded-4 shadow-sm">
        <button
          type="button"
          className="addCity p-3 m-0 btn border border-end-1 rounded-start-4 rounded-end-0"
          onClick={handleOpenModal}
        >
          Add City
        </button>
        <button
          type="button"
          className="addGuest p-3 m-0 btn border border-start-0 rounded-start-0 rounded-end-0"
          onClick={handleOpenModal}
        >
          Add guests
        </button>

        <button
          type="button"
          className="buttonSearch material-symbols-outlined text-danger p-3 border border1 border-start-0 rounded-start-0 rounded-end-4 pointer"
          onClick={handleOpenModal}
        >
          Search
        </button>
      </article>
    </header>
  );
}
