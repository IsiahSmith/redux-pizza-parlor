import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


function CheckoutList() {
    const dispatch = useDispatch();
    const history = useHistory();

    // const checkoutList = useSelector(store => store.);
    const pizzaAdder = useSelector(store => store.pizzaAdder);
    // handles click function of pizza and personal info 
    const handleClick = () => {
        axios.post('/api/order', { pizzaAdder })
            .then(response => {
                dispatch({
                    type: 'EMPTY_CART'
                })
                history.push('/Menu');
                //on click send user to HOME 

                //send a action to reducer to clear cart 

            })
            .catch(error => {
                console.log('error in post', error);
                alert('POST ghost')
            })
    };

    return (

        <div>
            <div>
                {pizzaAdder.map((order) => (
                    <div key={order.id}>
                            <p> {order.customer_name} </p>
                            <p> {order.street_address} </p>
                            <p> {order.city} {','} {order.state} </p>
               
                 {/* START PIZZA ORDERS */}

                        <div>
                            <h2> For {order.type}</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                ))}
                {/* <h2> For {pizzaAdder.type}</h2>  */}
                <p>   Total: $123.00</p>
                <div>
                    <button onClick={handleClick}>CheckOut</button>
                </div>
            </div>
        </div>
    );
}; //end function
export default CheckoutList;


