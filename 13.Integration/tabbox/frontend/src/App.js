import React from 'react';
import data from './assets/json/data.js';
import TabBox from './TabBox.js';
import './assets/scss/App.scss';

function App(props) {
    return (
        <div id={'App'}>
            <TabBox tabs={data.slice().reverse()}/>
        </div>
    );
}

export default App;