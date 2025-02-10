import React from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    return (
        <div>
            <Header />
            <Contents title={'제목'} name={'유정현'}/>
        </div>
    );
}

export {App};