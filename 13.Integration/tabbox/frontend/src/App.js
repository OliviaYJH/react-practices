import React from 'react';
import './assets/css/styles.css';
import data from './assets/json/data.js';
import TabBox from './TabBox.js';

function App(props) {
    return (
        <div id={'App'}>
            <TabBox tabs={data.slice().reverse()}/>
        </div>
    );
}

export default App;