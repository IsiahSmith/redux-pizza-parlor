import { useState } from 'react';
import { useDispatch } from 'react-redux';

function ClientIntake() {
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [clientCity, setClientCity] = useState('');
    const [clientZip, setClientZip] = useState('');
    const dispatch = useDispatch();
    //onCLick, ship this stuff off to redux's state
    const handleSubmit = () => {
            event.preventDefault();
            dispatch({
                type:'SET_CHECKOUT_LIST',
                payload: {
                    customer_name: clientName,
                    street_address: clientAddress,
                    city: clientCity,
                    zip: clientZip
                }
            })
    }
//this is the form connected to handle submit
    return (

        <form onSubmit={handleSubmit}>
            {/* name */}
            <input type="text"
            value={clientName}
            placeholder="Name"
            onChange={(event) => setClientName(event.target.value)}
            />
            {/* street address */}
            <input type="text"
            value={clientAddress}
            placeholder="Street Address"
            onChange={(event) => setClientAddress(event.target.value)}
            />
            {/* city */}
            <input type="text"
            value={clientCity}
            placeholder="City"
            onChange={(event) => setClientCity(event.target.value)}
            />
            {/* zip */}
            <input type="text"
            value={clientZip}
            placeholder="Zip"
            onChange={(event) => setClientZip(event.target.value)}
            />
            {/* option select for pick vs delivery */}

            <button type="submit">Next</button>
         </form>
    )
}
export default ClientIntake;