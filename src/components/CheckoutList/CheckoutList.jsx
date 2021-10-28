import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'


function CheckoutList() {
    const dispatch = useDispatch();
    const checkoutList = useSelector(store => store.checkoutList);
    const adminList = useSelector(store => store.adminList);
// handles click function of pizza and personal info 
    const handleClick = () => {
        axios.post('/api/order', {checkoutList, adminList})
        .then(response => {
     dispatch({
         type: 'SET_CHECKOUT_LIST',
         payload: []

     })
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
                {checkoutList.map((checkout) => {
                    <ul>

                        <li key={checkout.id}> {checkout.customer_name} </li>
                        <li> {checkout.street_address} </li>
                        <li> {checkout.city} {','} {checkout.state} </li>
                    </ul>
                })}
            </div>
            <div>
                <h2> For {checkoutList.type}</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {adminList.map((order =>
                        <tr key={order.id}>
                            <td>{order.name}</td>
                            <td>{order.price}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
            <div>
                Total:{''}{checkoutList.total}
            </div>
            <div>
                <button onClick={handleClick}>CheckOut</button>
            </div>
        </div>

    );
};
export default CheckoutList;


