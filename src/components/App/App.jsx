import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx'

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import ClientIntake from '../ClientIntake/ClientIntake';
import Menu from '../Menu/Menu.jsx';
import CheckoutList from '../CheckoutList/CheckoutList.jsx';


function App() {
  const dispatch = useDispatch();

  //grab from DB on page refresh
  useEffect(() => {
    console.log('in useEffect');
    refreshPizza();
  }, []);


  //GET from pizza router for menu/client info
  function refreshPizza() {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then(response => {
        console.log('IN /PIZZA GET:', response.data);
        dispatch({
          type: 'SET_PIZZA', //<----- Katherine's action.type here
          payload: response.data
        })
      })
      .catch(error => {
        console.log('ERROR IN GET /PIZZA', error);
      })
  }

  return (
    <Router>
      <div className='App'>

        <Route path="/Header">
          <Header />
        </Route>

        <Route path="/Menu">
          <Menu refreshPizza={refreshPizza} />
        </Route>

        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>

        <Route path="/ClientIntake">
          <ClientIntake />
        </Route>

        <Route path="/CheckoutList">
          <CheckoutList />
        </Route>

      </div>
    </Router>
  );
}

export default App;
