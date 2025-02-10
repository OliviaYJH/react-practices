import React from 'react';
import GroceryList from './GroceryList';
import './assets/css/App.css';

function App(props) {
    const groceries = [
        {name: 'milk', count: 10},
        {name: 'egg', count: 5}, 
        {name: 'bread', count: 20},
        {name: 'water', count: 10},
        {name: 'carrot', count: 15}
    ];

    return (
        <div id={'App'}>
            <h1 >{'Grocery List'}</h1>
            <GroceryList groceries={groceries}/>
        </div>
    );
}

export default App;