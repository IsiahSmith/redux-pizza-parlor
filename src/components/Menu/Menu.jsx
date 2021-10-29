import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Menu({refreshPizza}) {
    let [pizzaToAdd, setPizzaToAdd] = useState({name:'', description: '', price: '', image_path: ''})

    const pizzaList = useSelector(store => store.checkoutList)

    const dispatch = useDispatch();

    const history = useHistory();

    const setPizzaToAdd = () => {
            dispatch({
                type: 'SET_CHECKOUT_LIST',
                payload: pizzaToAdd
            })
            history.push('/clientIntake');
        }

    return(
        <>  
            <Header />
            <h2>Step 1: Select Your Pizza</h2>
                <div>
                    {pizzaList((pizza, i) => (
                        <MenuItem 
                        key={i} 
                        pizza={pizza}
                        refreshPizza={refreshPizza} />
                    ))}
                </div>
            <button onClick={handleButton}>NEXT</button>
        </>
    )
}

export default Menu;