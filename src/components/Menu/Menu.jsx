import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

function Menu({refreshPizza}) {
    // let [pizza, setPizza] = useState({name:'', description: '', price: '', image_path: ''})

    const dispatch = useDispatch();

    const handleButton = () => {
        refreshPizza()
        .then(response => {
            dispatch({
                type: 'SET_CHECKOUT_LIST',
                payload: response.data
            })
        })

    }

    return(
        <>  
            <Header />
            <h2>Step 1: Select Your Pizza</h2>
            
            <button onClick={handleButton}>NEXT</button>
        </>
    )
}

export default Menu;