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



//Reducer that set the menu page from database
const MenuList = (state = [], action) => {
    if (action.type === 'SET_MENU_LIST') {
        return action.payload;
    }
    return state;
}

// reducer that add pizzas and client info to checkout page
// also empties cart
const pizzaAdder = (state = [], action) => {
    if (action.type === 'ADD_PIZZA') {
        return [...state, action.payload]
    } else if (action.type === 'REMOVE_PIZZA') {
        state = state.filter(
            (pizza) => Number(pizza.id) !== Number(action.payload.id)
        )
        return state
    } else if (action.type === 'EMPTY_CART') {
        return state = []
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

        MenuList,
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
