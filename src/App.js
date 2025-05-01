import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Buttoncontrol = () => {
  const [updatedvalue, setUpdatevalue] = useState({inputName:"",inputRollno:""});
 

  const HandleTheForm = (event) => {
    event.preventDefault();
    const {inputName,inputRollno}=updatedvalue
    console.log(inputName);
    console.log(inputRollno);
  };
  return (
    <>
      <Form onSubmit={HandleTheForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter Name"
            value={updatedvalue.inputName}
            onChange={(event) => {
              setUpdatevalue({...updatedvalue,inputName:event.target.value})
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Roll number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Roll number"
            value={updatedvalue.inputRollno}
            onChange={(event) => {
              setUpdatevalue({...updatedvalue,inputRollno:event.target.value})
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
