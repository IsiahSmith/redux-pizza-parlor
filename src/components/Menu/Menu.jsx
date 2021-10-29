import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import axios from 'axios';
import Header from '../Header/Header';

function Menu() {
    const pizzaList = useSelector(store => store.checkoutList)

    const dispatch = useDispatch();

    const history = useHistory();

  
    useEffect(() => {
        console.log('in useEffect');
        refreshPizza();
      }, []);

    function refreshPizza() {
        axios({
          method: 'GET',
          url: '/api/pizza'
        })
          .then(response => {
            console.log('IN /PIZZA GET:', response.data);
            dispatch({
              type: 'SET_CHECKOUT_LIST', //<----- Katherine's action.type here
              payload: response.data
            })
          })
          .catch(error => {
            console.log('ERROR IN GET /PIZZA', error);
          })
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
                        />
                    ))}
                </div>
            <button onClick={history.push('/clientIntake')}>NEXT</button>
        </>
    )
}

export default Menu;