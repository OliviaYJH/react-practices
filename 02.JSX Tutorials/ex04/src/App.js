import React, {useRef, useState} from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    const refDiv = useRef(null); // {current: null}
    const [test, setTest] = useState('hello'); // 변수와 함수 

    return (
        <div id='App' ref={refDiv}>
            {'Test'}
        </div>
    );

    //return React.createElement('div', {id: 'App'}, 'Test');
}

export {App};