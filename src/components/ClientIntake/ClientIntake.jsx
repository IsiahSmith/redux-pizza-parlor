import { useDispatch } from 'react-redux';


function ClientIntake() {
    let [clientIntake, setClientIntake] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            {/* name */}
            
            {/* street address */}

            {/* city */}

            {/* zip */}

            {/* option select for pick vs delivery */}


            <button type="submit">Next</button>
        </form>
    )
}

export default ClientIntake;