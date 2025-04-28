import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Buttoncontrol = () => {
  const [updatedname, inputName] = useState("");
  const [updaterollno, inputrollno] = useState("");
  const [updatephnum, inputphnum] = useState("");
  const [updatedadd, inputadd] = useState("");

  const HandleTheForm = (event) => {
    event.preventDefault();
    console.log(updatedname);
    console.log(updaterollno);
    console.log(updatephnum);
    console.log(updatedadd);
  };
  return (
    <>
      <Form onSubmit={HandleTheForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter Name"
            onChange={(event) => {
              inputName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Roll number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Roll number"
            onChange={(event) => {
              inputrollno(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Phone number"
            onChange={(event) => {
              inputphnum(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter Address"
            onChange={(event) => {
              inputadd(event.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Buttoncontrol;
