import { useState, useEffect } from 'react';
import React from 'react'
import xtype from 'xtypejs'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './NewClaims.css'

export function NewClaims(){

    // Initialize state for form fields and validation errors
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [claim_amt, setClaimAmt] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});

  // Define validation rules
  const validate = () => {
    let errors = {};

    // Validate name
    // if (!name) {
    //   errors.name = 'Name is required';
    // }

    // Validate first name
    if (!first_name) {
      errors.first_name = 'First Name is required';
    } else if (xtype.type(first_name)!='string') {
      errors.first_name = 'First name is invalid';
    }
    //Validate last name
    if (!last_name) {
        errors.last_name = 'Last Name is required';
      } 
    // Validate claim amount
    if (!claim_amt) {
      errors.claim_amt = 'Claim amount is required';
    } else if (claim_amt.length > 10) {
      errors.claim_amt = 'Exceeded max character limit!';
    }
    // Validate date
    if (!date) {
        errors.date = 'Date is required';
      } 
    return errors;
  };

  // Validate fields on form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length === 0) {
      // Submit form
    } else {
      setErrors(errors);
    }
  };

  // Validate fields on field change
  useEffect(() => {
    const errors = validate();

    setErrors(errors);
  }, [first_name, last_name, date, claim_amt]); //, last_name, date, claim_amt]);



    return(
        <form onSubmit={handleSubmit}>
            <div className = "createPage">
                <div>
                    <Form.Label>Insurance Policy</Form.Label>
                    <Form.Select aria-label="Default select example" name="variantId" /*onChange={updateFormField}*/>
                    {/* <option>-- Models --</option> */}
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <option value= "1009">
                            Car
                        </option>
                    ))}
                    </Form.Select>
                </div>
                
                <div className="login-section">
                    <div className = "login-field">
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>First name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Input your first name" 
                                name="first_name"
                                value={first_name} 
                                onChange={(e) => setFirstName(e.target.value)} 
                                // value={twoWayBind.username}
                                // onChange = {updateFormField}
                            />
                            {errors.first_name && <div className="text-danger">{errors.first_name}</div>}
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of Expense</Form.Label>
                            <Form.Control 
                                type="date" 
                                placeholder="DD/MM/YYYY" 
                                name="date"
                                value={date} 
                                onChange={(e) => setDate(e.target.value)}
                                // value={twoWayBind.username}
                                // onChange = {updateFormField}
                            />
                            {errors.date && <div className="text-danger">{errors.date}</div>}
                        </Form.Group>
                    </div>
                </div>

                <div className="login-section">
                    <div className = "login-field">
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Input your last name" 
                                name="last_name"
                                value={last_name} 
                                onChange={(e) => setLastName(e.target.value)}
                                // value={twoWayBind.username}
                                // onChange = {updateFormField}
                            />
                            {errors.last_name && <div className="text-danger">{errors.last_name}</div>}
                        </Form.Group>
                    </div>
                </div>

                <div className="login-section">
                    <div className = "login-field">
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Claim amount</Form.Label>
                            <Form.Control 
                                type="number" 
                                pattern = '/^([1-9][0-9]*)$/'
                                max = "10"
                                placeholder="Input claim amount" 
                                name="amount"
                                value={claim_amt} 
                                onChange={(e) => setClaimAmt(e.target.value)}
                                // value={twoWayBind.username}
                                // onChange = {updateFormField}
                            />
                            {errors.claim_amt && <div className="text-danger">{errors.claim_amt}</div>}
                        </Form.Group>

                    </div>
                    <div className= "submit-login-form">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </div>
                </div>


            </div>
        </form>
    )
}