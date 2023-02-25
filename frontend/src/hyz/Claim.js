import {useNavigate} from 'react-router-dom'
const Claim = ({claimId,insuranceType,purpose,amount,status}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return ( 
    <tr>
        <td onClick={handleClick}>{claimId}</td>
        <td>{insuranceType}</td>
        <td>{purpose}</td>
        <td>{amount}</td>
        <td>{status}</td>
    </tr>
     );
}
 
export default Claim;