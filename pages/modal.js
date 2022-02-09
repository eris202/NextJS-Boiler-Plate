import Image from "next/image";

import { Button, Modal, Container } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

export default function ModalComponent({ link,src, description, title, ...props }) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title ? title : "Personalize your data"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ backgroundImage: `${props.src}` }}></div>
        <div>{description}</div>
      </Modal.Body>
      <Modal.Footer>
        {description && (
          <a class="btn btn-success text-white" href={src} target="_blank">
            {" "}
            Visit site
          </a>
        )}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
