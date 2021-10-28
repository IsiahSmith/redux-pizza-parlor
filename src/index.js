import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//create Store - combine reducers and middleware
import { createStore, combineReducers, applyMiddleware } from 'redux';


//Reducer
const checkoutList = (state =[ ], action) => {
    if (action.type === 'SET_CHECKOUT_LIST'){
        //this will replace the checkoutList
        //payload is ...?
        return action.payload;
    }
    return state;
}

const AdminList = (state = [ ], action) => {
    if (action.type === 'SET_ADMIN_LIST'){
        return action.payload;
    }
    return state;
}

//Store 
const pizzaStore = createStore(
    combineReducers({
        checkoutList, 
        AdminList
    }), 
    applyMiddleware (logger)
);


ReactDOM.render(
    <App />,
    document.getElementById('root'));
