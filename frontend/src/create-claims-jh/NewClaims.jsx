import React, { useState } from 'react'
//import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './NewClaims.css'

export function NewClaims(){

    const [toggleFollowUp , setFollowUpToggle] = useState(false)

    return(
        <div className = "createPage">
            <div>
                {/* <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Insurance Policy
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                    {Array.from({ length: 4}).map((_, idx) => (
                        <Dropdown.Item href="#/action-1" active>Car</Dropdown.Item>
                    ))}
                        <Dropdown.Item href="#/action-1" active>Car</Dropdown.Item>
                        <Dropdown.Item>Housing</Dropdown.Item>
                        <Dropdown.Item>Personal Accident</Dropdown.Item>
                        <Dropdown.Item>Travel</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}

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
                            // value={twoWayBind.username}
                            // onChange = {updateFormField}
                        />
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
                            // value={twoWayBind.username}
                            // onChange = {updateFormField}
                        />
                    </Form.Group>
                </div>
            </div>

            <div className="login-section">
                <div className = "login-field">
                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                        <Form.Label>Claim amount</Form.Label>
                        <Form.Control 
                            type="number" 
                            max = "10"
                            placeholder="Input claim amount" 
                            name="amount"
                            // value={twoWayBind.username}
                            // onChange = {updateFormField}
                        />
                    </Form.Group>
                </div>
            </div>

            <div>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Date of Expense</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="DD/MM/YYYY" 
                            name="date"
                            // value={twoWayBind.username}
                            // onChange = {updateFormField}
                        />
                </Form.Group>
            </div>

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

                <Form.Select aria-label="Default select example" name="variantId" /*onChange={updateFormField}*/>
                {Array.from({ length: 2 }).map((_, idx) => (
                    <option value= "1009">
                        Car
                    </option>
                ))}
                </Form.Select> </div> : <h1>No follow up claims</h1>
            } 
        </div>
    )
}