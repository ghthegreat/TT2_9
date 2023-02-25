import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

export default function LoginForm() {
  const [employeeID, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form data to the server
      console.log('Submitting form:', { employeeID, password });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (employeeID.trim() === '') {
      errors.employeeID = 'Employee ID is required';
    }
    if (password.trim() === '') {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <div class="d-flex justify-content-center">
      <img src="path/to/image.jpg" class="img-fluid" alt="Responsive image"></img>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control type="email" placeholder="Enter Employee ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

//export loginForm;