import React, {useState} from 'react';
import Tabs from './Tabs.js';
import TabView from './TabView.js';
import datas from './assets/json/data.js';
import {Tab_Box} from './assets/scss/TabBox.scss';

function TabBox(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const selectTab = (no) => {
        console.log(`${no} selected`);

        const index = datas.findIndex((e) => e.no === no);
        console.log(index);

        if (index !== -1) {
            setActiveIndex(index);
        }
    }

    return (
        <div className={Tab_Box}>
           <Tabs 
                selectTab={selectTab}
                tabs={datas.map((e, i) => {
                    const {contents, ...rest} = e;

                    if(i === activeIndex) {
                        rest.active = true;
                    }
                    return rest;
                })}
                />
           <TabView contents={datas[activeIndex].contents}/>
        </div>
    );
}

export default TabBox;