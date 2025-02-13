import React, {useState} from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem({name, active, setSelectTab, index}) {

    return (
        <li 
            className={[Tab_Item, active ? 'active' : ''].join(' ')}
            onClick={() => setSelectTab(index)}> 
            {name}
        </li>
    );
}

export default TabItem;