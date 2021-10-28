import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


function AdminList () {

    const orderList = useSelector(pizzaStore => pizzaStore.orderList);
    const dispatch = useDispact();

    axios
    .get('/api/order')
    .then(response => {
        dispatch({
            type: 'SET_PIZZA_TYPE',
            payload: response.data
        })
    })
    .catch(error => {
        console.log('error in get', error);
    })



    return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList.map((order) => 
                          <tr key={order.id}>
                          <td>{order.name}</td>
                          <td>{order.time}</td>
                          <td>{order.type}</td>
                          <td>{order.cost}</td>
                      </tr>
                    )}
                </tbody>
            </table>
    );
};

export default AdminList;
