import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import './NewClaims.css'

export function NewClaims(){



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
                            placeholder="Enter your first name" 
                            name="username"
                            // value={twoWayBind.username}
                            // onChange = {updateFormField}
                        />
                    </Form.Group>
                </div>
            </div>
        </div>
    )
}