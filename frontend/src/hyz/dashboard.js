import React, { useState } from 'react';
import Claim from './claim';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const Dashboard = () => {
    const [claimID, setClaimID] = useState('');
    const [insuranceType, setInsuranceType] = useState('');
    const [status, setStatus] = useState('');
    const [claims, setClaims] = useState([{claimId:2010, insuranceType:'Personal Accident', status:'Pending'},{claimId:2010, insuranceType:'Personal Accident', status:'Pending'},{claimId:2010, insuranceType:'Personal Accident', status:'Pending'}]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('searching');
    }


    return (
        <div>
            <h1>Dashboard</h1>

            <form action="" >

                <label for="search">Search</label>
                <input type="text" />
                <label for="filter">Filter</label>
                <input type="text" />
                <input type="submit" value="search" />
            </form>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Claim</th>
                        <th>insuranceType</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {claims.length > 0 ? claims.map((claim) => (<Claim claimId={claim.claimId} insuranceType={claim.insuranceType} status={claim.status}/>)) :<td>User has no claims</td>}        
                </tbody>
                  
            </Table>
            {/*<input type="button" value="Create" />*/}
            <Button variant="primary">Create</Button>{' '}
        </div>

      );
}
 
export default Dashboard;