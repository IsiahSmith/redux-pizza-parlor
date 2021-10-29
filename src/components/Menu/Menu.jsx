import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Header from '../Header/Header.jsx'

function Menu({refreshPizza}) {

    const [pizzaToAdd, setPizzaToAdd] = useState({
        name:'', 
        description: '', 
        price: '', 
        image_path: ''
    });

    const pizzaList = useSelector(store => store.checkoutList)

    const dispatch = useDispatch();

    const history = useHistory();

    //Changed setPizzaToAdd to dispatchPizza 
    const dispatchPizza = () => {
            dispatch({
                type: 'SET_CHECKOUT_LIST',
                payload: pizzaToAdd
            })
            history.push('/clientIntake');
            // NEXT button click moves User to the next form! 
        }

    return(
        <>  
            <Header />
            <h2>Step 1: Select Your Pizza</h2>
                <div>
                    {pizzaList.map((pizza, i) => (
                        <MenuItem 
                        key={i} 
                        pizza={pizza}
                        refreshPizza={refreshPizza} />
                    ))}
                </div>
                {/* switched handle click to dispatch pizza */}
            <button onClick={dispatchPizza}>NEXT</button>
        </>
    )
}

export default Menu;