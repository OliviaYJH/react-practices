import React from 'react';
import './assets/css/styles.css';
import TabItem from './TabItem';

function Tabs({tabs}) {
    return (
        <ul>
            {tabs.map((tab, index) =>
                <TabItem 
                    key = {index}
                    name = {tab.name}
                    active = {tab.active}
                  />
            )}
        </ul>
    );
}

export default Tabs;