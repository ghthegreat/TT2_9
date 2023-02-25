import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import "../css/login.css"
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom'



export default function LoginPage() {


    const userContext = useContext(UserContext)
    const twoWayBind = userContext.loginData
    const setFormState = userContext.setLoginData
    const submitForm = userContext.login
    const navigate = useNavigate()

    const updateFormField = (event) => {
        setFormState({
            ...userContext.loginData, // Duplicate the original form object
            [event.target.name]: event.target.value // Rewrite the key that has changed
        })
    }

    const loginAccount = async () => {
        const res = await submitForm(userContext.loginData)
        if(res){
            navigate("/")
        }
        else{
            console.log('error')
        }
    }

    return (
        <React.Fragment>
            <div className="login-section">
                <div className="title">LOGIN</div>
                <div className="login-field">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Employee id</Form.Label>
                        <Form.Control placeholder="Enter employee id" name="employeeid" value={twoWayBind.email} onChange = {updateFormField}/>
                    </Form.Group>

                    &nbsp;

                    <Form.Group>
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            name="password"
                            value={twoWayBind.password}
                            onChange = {updateFormField}
                        />
                    </Form.Group>

                    <a class="btn btn-dark btn-outline-light mt-3" onClick = {loginAccount}>Login</a>
                    <div><a id="create-account-link" href = "/register">Create account</a></div>
                </div>
            </div>
        </React.Fragment>
    )
}
