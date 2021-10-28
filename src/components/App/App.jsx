import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';





function App() {
const dispatch = useDispatch();

//GET from pizza router for menu/client info
function refreshPizza() {
  axios({
    method: 'GET',
    url: '/api/pizza'
  })
    .then(response => {
      console.log('IN /PIZZA GET:', response.data);
      dispatch({
        type: 'SET_PIZZA', //<----- Katherine;s action.type here
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
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>

        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>

      </div>
    </Router>
  );
}

export default App;
