import React from 'react';
import './assets/css/styles.css';
import Tabs from './Tabs.js';
import TabView from './TabView.js';

function TabBox({tabs}) {

    return (
        <div className={"tab-box"}>
           <Tabs tabs={tabs}/>
           <TabView/>
        </div>
    );
}

export default TabBox;