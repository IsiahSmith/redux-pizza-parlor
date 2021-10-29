import { useState } from 'react';
import { useDispatch } from 'react-redux';


function ClientIntake() {
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [clientCity, setClientCity] = useState('');
    const [clientZip, setClientZip] = useState('');
    const [clientDelivery, setClientDelivery] = ('');
    const dispatch = useDispatch();
    //onCLick, ship this stuff off to redux's state
    const handleSubmit = () => {
        event.preventDefault();
        dispatch({
            type: 'SET_CHECKOUT_LIST',
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
            <div>
                <label>Client Name </label>
            <input type="text"
                value={clientName}
                placeholder="name"
                onChange={(event) => setClientName(event.target.value)}
            />
            </div>
            <div>
            {/* street address */}
            <label>Street Address </label>
            <input type="text"
                value={clientAddress}
                placeholder="Street Address"
                onChange={(event) => setClientAddress(event.target.value)}
            />
            </div>
            <div>
            {/* city */}
            <label> City </label>
            <input type="text"
                value={clientCity}
                placeholder="City"
                onChange={(event) => setClientCity(event.target.value)}
            />
            </div>
            <div>
            {/* zip */}
            <label> Zip Code </label>
            <input type="text"
                value={clientZip}
                placeholder="Zip Code"
                onChange={(event) => setClientZip(event.target.value)}
            />
            </div>
            {/* option select for pick vs delivery */}
            <div className="radioBtn">
                <div>
                <label> Pick Up </label>
                <input type="radio" 
                value="Pick up" 
                name="Delivery" 
                /> 
                </div>
                <div>
                <label> Delivery </label>
                <input type="radio" 
                value="Delivery" 
                name="Delivery" />
                </div>
            </div>
            <button type="submit">Next</button>
         </form>
    )
}
export default ClientIntake;