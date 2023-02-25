import { useState, useEffect } from 'react';
import React from 'react'
import xtype from 'xtypejs'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './NewClaims.css'
import axios from 'axios'

export function NewClaims(){
    const BASE_URL = "http://localhost:5000"


    // Initialize state for form fields and validation errors
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [claimAmt, setClaimAmt] = useState('');
//   const [date, setDate] = useState('');
//   const [errors, setErrors] = useState({});
//   const [toggleFollowUp , setFollowUpToggle] = useState(false)

const [insuranceId, setInsuranceId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [claimAmt, setClaimAmt] = useState('');
  const [purpose, setPurpose] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});
  const [followUp , setFollowUp] = useState();
  const [previousClaimId , setPreviousClaim] = useState();
  const [toggleFollowUp , setFollowUpToggle] = useState(false)


  // Define validation rules
  const validate = () => {
    let errors = {};

    // Validate name
    // if (!name) {
    //   errors.name = 'Name is required';
    // }

    // Validate first name
    if (!firstName) {
      errors.firstName = 'First Name is required';
    } else if (xtype.type(firstName)!='string') {
      errors.firstName = 'First name is invalid';
    }
    //Validate last name
    if (!lastName) {
        errors.lastName = 'Last Name is required';
      } 
    // Validate claim amount
    if (!claimAmt) {
      errors.claimAmt = 'Claim amount is required';
    } else if (claimAmt.length > 10) {
      errors.claimAmt = 'Exceeded max character limit!';
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
  }, [firstName, lastName, date, claimAmt]); //, lastName, date, claimAmt]);

  //api consts
  let content = {
    "insuranceID": insuranceId,
    "firstName": firstName,
    "lastName": lastName,
    "date": date,
    "claimAmt": claimAmt,
    "purpose": purpose,
    "followUp": "No",
    "previousClaimId": null
  }

  const submit = async (req , res) => {
    let response = await axios.post(BASE_URL + "/claims/create" , content)
  }

    return(
        <form onSubmit={handleSubmit}>
            <div className = "createPage">
                <div>
                    <Form.Label>Insurance Policy</Form.Label>
                    <Form.Select aria-label="Default select example" name="variantId" /*onChange={updateFormField}*/>
                    {/* <option>-- Models --</option> */}
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <option value= "1009">
                            Sample Insurance Policy
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
                                name="firstName"
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                                // value={twoWayBind.username}
                                // onChange = {updateFormField}
                            />
                            {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Input your last name" 
                                name="lastName"
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)}
                                // value={twoWayBind.username}
                                // onChange = {updateFormField}
                            />
                            {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
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

                {/* <div className="login-section">
                    <div className = "login-field">
                        { <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Input your last name" 
                                name="lastName"
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)}
                                // value={twoWayBind.username}
                                // onChange = {updateFormField}
                            />
                            {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                        </Form.Group> }
                    </div>
                </div> */}

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
                                value={claimAmt} 
                                onChange={(e) => setClaimAmt(e.target.value)}
                                // value={twoWayBind.username}
                                // onChange = {updateFormField}
                            />
                            {errors.claimAmt && <div className="text-danger">{errors.claimAmt}</div>}
                        </Form.Group>
                        <div className="login-section">
                        <div className = "login-field">
                            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                <Form.Label>Purpose of claim</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Purpose of claim" 
                                    name="last_name"
                                    // value={twoWayBind.username}
                                    // onChange = {updateFormField}
                                />
                            </Form.Group>
                        </div>
            </div>
                        <div className="mb-3 d-flex">
                        <Form.Check 
                            className = "followUpCheck" 
                            inline label="Have follow up" 
                            //name="tags_id" type='checkbox' 
                            //id="inline-checkbox-1" 
                            value = {toggleFollowUp}
                            //checked={this.state.tags_id.includes(this.state.tagsData[idx]._id)}
                            onChange = {()=>{setFollowUpToggle((prevState)=> {
                                return !prevState
                            })}}
                        />
                        </div>

                        
                    {
                    toggleFollowUp ?
                    <div>
                    <Form.Label>Insurance Policy</Form.Label>
                    <Form.Select aria-label="Default select example" name="variantId" /*onChange={updateFormField}*/>
                    {/* <option>-- Models --</option> */}
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <option value= "1009">
                            Sample insurance ID
                        </option>
                    ))}
                    </Form.Select>
                    </div>
                    :

                    <h1>No follow up</h1>

                    }

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