import React from 'react';
import './assets/css/styles.css';

function TabItem({name, active}) {
    return (
        <li className={active ? "active" : ""}>
            {name}
        </li>
    );
}

export default TabItem;