import React from "react";
import "./Modal.css";

const modalstyles = {
  position: "fixed",
  top: "0px",
  left: "0px",
  backgroundColor: "white",
  zIndex: 1000,
  width: "100%",
};

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div style={modalstyles} className={props.className}>
      <div>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  return (
    <>
      <BackDrop onClose={props.onClose} />, portalID
      <ModalOverlay className={props.className}>{props.children}</ModalOverlay>
    </>
  );
}
