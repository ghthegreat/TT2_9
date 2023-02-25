const Claim = ({claimId,insuranceType,status}) => {
    return ( 
    <tr>
        <td>{claimId}</td>
        <td>{insuranceType}</td>
        <td>{status}</td>
    </tr>
     );
}
 
export default Claim;