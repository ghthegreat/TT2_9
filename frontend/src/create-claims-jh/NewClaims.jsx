import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import './NewClaims.css'

export function NewClaims(){
    return(
        <div className = "createPage">
            <div>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Insurance Policy
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" active>Car</Dropdown.Item>
                        <Dropdown.Item>Housing</Dropdown.Item>
                        <Dropdown.Item>Personal Accident</Dropdown.Item>
                        <Dropdown.Item>Travel</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            
            <div className="login-section">
                <div className = "title">LOGIN</div>
                <div className = "login-field">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your username" 
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