const Claim = ({claimId,insuranceType,purpose,amount,status}) => {
    return ( 
    <tr>
        <td>{claimId}</td>
        <td>{insuranceType}</td>
        <td>{purpose}</td>
        <td>{amount}</td>
        <td>{status}</td>
    </tr>
     );
}
 
export default Claim;