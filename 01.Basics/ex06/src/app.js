import React from 'react';

function App() {
    // const App = React.createElement('div', null, "Hello World", 10, parseInt('20'));
    // return App;

    const App = React.createElement('div', null, "Hello World");
    return (
        <div>
            {'Hello World!!!'}
            {10}
            {parseInt('20')}
            <p>
                {'test'}
                <span>
                    {'test2'}
                </span>
            </p>
        </div>
    );
}

export {App};