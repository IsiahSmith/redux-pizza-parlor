import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


function AdminList () {

    const adminList = useSelector(pizzaStore => pizzaStore.adminList);
    const dispatch = useDispatch();

    axios
    .get('/api/order')
    .then(response => {
        dispatch({
            type: 'SET_ADMIN_LIST',
            payload: response.data
        })
    })
    .catch(error => {
        console.log('error in get', error);
    })



    return (
        <div>
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
                    {adminList.map((order) => 
                          <tr key={order.id}>
                          <td>{order.customer_name}</td>
                          <td>{order.time}</td>
                          <td>{order.type}</td>
                          <td>{order.total}</td>
                      </tr>
                    )}
                </tbody>
            </table>
            </div>
    );
};

export default AdminList;
