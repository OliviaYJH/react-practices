import React from 'react';
import Tabs from './Tabs.js';
import TabView from './TabView.js';
import {Tab_Box} from './assets/scss/TabBox.scss';

function TabBox({tabs}) {

    return (
        <div className={Tab_Box}>
           <Tabs tabs={tabs}/>
           <TabView/>
        </div>
    );
}

export default TabBox;