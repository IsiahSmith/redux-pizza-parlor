import {useDispatch} from 'react-redux';
import {useState} from 'react';

function MenuItem({pizza}) {
    const [toRemove, setToRemove] = useState(true)

    const dispatch = useDispatch();

    const toggleRemove = () => {
        setToRemove(!toRemove)
    }

    const addPizza = () => {
        dispatch({
            type: 'ADD_PIZZA',
            payload: pizza
        })
        dispatch({
            type: 'SET_PRICE',
            payload: pizza.price
        })
        toggleRemove();
    }

    const removePizza = () => {
        dispatch({
            type: 'REMOVE_PIZZA',
            payload: pizza
        })
        dispatch({
            type: 'REMOVE_PRICE',
            payload: pizza.price
        })
        toggleRemove();
    }




    return (
        <div>
            <img 
            src={pizza.image_path} 
            width='150px'
            height='150px'
            />
            <div>
                <h2>{pizza.name}</h2>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
            </div>
            <div>
                {toRemove ? 
                <button onClick={addPizza}>ADD</button> : 
                <button onClick={removePizza}>REMOVE</button>}
            </div>
        </div>
    )
}

export default MenuItem;