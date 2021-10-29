import {useSelector} from 'react-redux';

function Header() {
    const pizzaPrice = useSelector(store => store.pizzaPrice)

    return (
        <header className='App-header'>
            <h1 className='App-title'> Shake 'N' Bake Pizza Parlor </h1>
            <p> {pizzaPrice} </p>
        </header>
    )
}

export default Header;