import React, {useState} from 'react';
import Tabs from './Tabs.js';
import TabView from './TabView.js';
import datas from './assets/json/data.js';
import {Tab_Box} from './assets/scss/TabBox.scss';

function TabBox(props) {
    const data = datas.slice().reverse();

    const [selectTab, setSelectTab] = useState(0);
    const [tabs, setTabs] = useState(data);

    const clickTab = (index) => {
        console.log('current tab index', index);
        const newTabs = tabs.map((tab) => ({
            ...tab,
            active: tab.no === index
        }));
        setTabs(newTabs);
        setSelectTab(index);
    }

    return (
        <div className={Tab_Box}>
           <Tabs 
                tabs={tabs} 
                setSelectTab={clickTab}/>
           <TabView contents={tabs.find(tab => tab.no === selectTab)?.contents || '내용 없음'}/>
        </div>
    );
}

export default TabBox;