import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import './EditClaims.css'
import axios from 'axios';


export function EditClaims(){

    const testData = [{
        "ClaimID": 2010,
        "InsuranceID": 1009,
        "FirstName": "Martin",
        "LastName": "Ong",
        "ExpenseDate": "2022-07-14T08:00:00+08:00",
        "Amount": 100.00,
        "Purpose": "Dentist",
        "FollowUp": 0,
        "PreviousClaimID": null,
        "Status": "Approved",
        "LastEditedClaimDate": "2022-07-15T12:22:45+08:00"
       }]
    const sampleData = testData[0]
    const [editClaims, setEditClaims] = useState({
        'employeeId': "58001002",
        'Amount': sampleData['Amount'],
        'Purpose': sampleData['Purpose']
    })

    const editableFields = {
        "ClaimID": false,
        "InsuranceID": false,
        "FirstName": false,
        "LastName": false,
        "ExpenseDate": false,
        "Amount": true,
        "Purpose": true,
        "FollowUp": false,
        "PreviousClaimID": false,
        "Status": false,
        "LastEditedClaimDate": false
       }
    
    const keys = Object.keys(sampleData)

    const onEditField = (value, key) => {
        console.log(key)
        setEditClaims(prevState => {
            prevState[key] = value
            console.log(prevState)
            return prevState
        })
    }

    const onEdit = () => {
        console.log('button is working')
        axios.put('http://localhost:5000/claims/editclaims', editClaims).then((res)=>{
        console.log('worked')
        console.log(res)
        }
        );

    }
    return(
        <div className = "createPage">
            <h1>Edit Claims page</h1>
            {keys.map((key) => {
                console.log(key)
                return (
                    <div className="login-section">
                    {editableFields[key] ? <p className='editable'>** editable **</p>:''}
                    <div>
                            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>{key}</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder={sampleData[key]}
                                name={key}
                                disabled={!editableFields[key]}
                                onChange = {
                                    (e) => {
                                        onEditField(e.target.value, key)
                                    }
                                }
                                // onChange = {updateFormField}
                            />
                        </Form.Group>
                    </div>
                    <div className = "login-field">
                    </div>
                </div>
                )
            })}

<button onClick={() => {
    onEdit()
}}>Edit</button>
        </div>
    )
}