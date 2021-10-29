import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//create Store - combine reducers and middleware
import { createStore, combineReducers, applyMiddleware } from 'redux';
//ADDED LOGGER- NPM INSTALL 
import logger from 'redux-logger';
//npm install react-redux 
import { Provider } from 'react-redux';



//Reducer
const checkoutList = (state = [], action) => {
    if (action.type === 'SET_CHECKOUT_LIST') {
        //this will replace the checkoutList
        //payload is an array
        //might need to spread later
        return action.payload;
    }
    return state;
}


const pizzaAdder = (state = [], action) => {
    if (action.type === 'ADD_PIZZA') {
        return [...state, action.payload]
    } else if (action.type === 'REMOVE_PIZZA') {
        state = state.filter(
            (pizza) => Number(pizza.id) !== Number(action.payload.id)
        )
        return state
    }
    return state
}


const adminList = (state = [], action) => {
    if (action.type === 'SET_ADMIN_LIST') {

        return action.payload;
    }
    return state;
}


const pizzaPrice = (state = [], action) => {
    if (action.type === 'SET_PRICE') {
        return action.payload;
    }
    return state;
}

//Store 
const pizzaStore = createStore(
    combineReducers({

        checkoutList,
        adminList,
        pizzaPrice,
        pizzaAdder
    }),
    applyMiddleware(logger)

);


ReactDOM.render(
    <Provider store={pizzaStore}>
    <App />
    </Provider>,
    document.getElementById('root'));
