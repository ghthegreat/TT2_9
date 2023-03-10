import React, { useEffect, useState } from 'react';
import Claim from './Claim';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {ErrorPage} from '../ErrorPage';

const Dashboard = () => {

    // const [claimID, setClaimID] = useState('');
    // const [insuranceType, setInsuranceType] = useState('');
    // const [status, setStatus] = useState('');
    //{claimId:2010, insuranceType:'Personal Accident', purpose:"blank",amount:200,status:'Pending'},{claimId:2010, insuranceType:'Personal Accident', purpose:"blank",amount:200,status:'Pending'}
    const [claims, setClaims] = useState([]);
    const [insurance,setInsurance] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('searching');


    }






    // GET REQUEST insurance claim
    async function getInsuranceClaim() {
        try{
            const a = window.localStorage.getItem("id")
            const result = await axios.get('http://localhost:5000/claims/getClaims',  {
                params: {
                  employeeId: a
                }
              })
            setClaims(result.data);
            console.log(result.data);
             return result;
        }
        catch(err){
            console.error(err)
        }

    }

    useEffect(() => {
        const a = getInsuranceClaim()
        setClaims(a)
    }
    , [])

    const c = window.localStorage.getItem("myTokens");
    if (!c){
        return <ErrorPage></ErrorPage>
    }
    // GET REQUEST insurance policy
    function getInsurancePolicy(){
        axios
        .get('/id', {
            timeout: 5000
        })
        .then(res => {
                setInsurance(res.data);
                console.log(res.data);
        })
        .catch(err => console.error(err));
    }
/*
    useEffect(() => {
        //getInsuranceClaim()
    },[])

    useEffect(() => {





    }, [claims])
*/
    return (
        <div className='content'>
            <div className='headcontainer'>
                <h1 className="dashheader">Dashboard</h1>
                <Button className='logout' variant="danger">Logout</Button>{' '}
            </div>

            <form action="" className='fields'>

                {/* <label for="search">Search:</label>
                <input type="text" /> */}
                <label htmlFor="filter">Filter:</label>
                <input type="text" />
                <input type="submit" value="search" />
            </form>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Claim</th>
                        <th>insuranceType</th>
                        <th>Purpose</th>
                        <th>Amount</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {claims.length > 0 ? claims.map((claim) => (<Claim claimId={claim.ClaimID} insuranceType={claim.InsuranceType} purpose={claim.Purpose} amount={claim.Amount} status={claim.Status}/>)) :<td>User has no claims</td>}
                </tbody>

            </Table>
            {/*<input type="button" value="Create" />*/}
            <Link to="create-claims"><Button variant="primary">Create</Button>{' '}</Link>
        </div>

      );
}

export default Dashboard;
