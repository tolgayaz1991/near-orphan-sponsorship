import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel, Row } from "react-bootstrap";
import { getAccountId } from "../../utils/near";
import { toast } from "react-toastify";
import { NotificationError } from "../others/Notifications";

const AddOrphan = ({ add }) => {
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const isFormFilled = () => name && birthYear && country && gender;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => 
  {
    try {
    if (await getAccountId().then(data => data) !== "orphan-sponsorship.help-needy.testnet"){
    throw new Error("Only allowed accounts can register an orphan.");
    }
    setShow(true);
  }
    catch (error) {
      toast(<NotificationError text={error.toString()} />);
      console.log({ error });
    }
  }
  return (
    <>
      <Row className="justify-content-center mb-2" xs={3} md={2}>
      <Button
        onClick={handleShow}
        className="btn btn-lg"
      >
        Add An Orphan
      </Button>
      </Row>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Orphan Info</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputName"
              label="Orphan Full Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Full Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputBirthYear"
              label="Birth Year"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                onChange={(e) => {
                  setBirthYear(e.target.value);
                }}
                placeholder="Birth Year"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputLocation"
              label="Location"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputGender"
              label="Gender"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Gender"
                autoComplete="off"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </FloatingLabel>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              add({
                name,
                birthYear,
                gender,
                country
              });
              handleClose();
            }}
          >
            Add the Orphan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddOrphan.propTypes = {
  add: PropTypes.func.isRequired,
};

export default AddOrphan;