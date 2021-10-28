import { useState } from 'react';
import { useDispatch } from 'react-redux';


function ClientIntake() {
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [clientCity, setClientCity] = useState('');
    const [clientZip, setClientZip] = useState('');


    return (
        <form onSubmit={handleSubmit}>
            {/* name */}
            <input type="text" 
            value={clientName}
            placeholder="name"
            onChange={(event) => setClientName(event.target.value)}
            />
            {/* street address */}
            <input type="text" 
            value={clientAddress}
            placeholder="name"
            onChange={(event) => setClientAddress(event.target.value)}
            />
            {/* city */}
            <input type="text" 
            value={clientCity}
            placeholder="name"
            onChange={(event) => setClientCity(event.target.value)}
            />
            {/* zip */}
            <input type="text" 
            value={clientZip}
            placeholder="name"
            onChange={(event) => setClientZip(event.target.value)}
            />
            {/* option select for pick vs delivery */}


            <button type="submit">Next</button>
        </form>
    )
}

export default ClientIntake;