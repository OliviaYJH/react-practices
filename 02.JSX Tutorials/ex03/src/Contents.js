// rsc
/*
import React from 'react';

const Contents = () => {
    return (
        <div>
            
        </div>
    );
};

export default Contents;
*/


// rsf
import React from 'react';

function Contents({title, name}) {
    return (
        <div>
            <p>함수 컴포넌트</p>
            <p>{title}</p>
            <p>{name}</p>
        </div>
    );
}

export default Contents;

// rcc
/*
import React, { Component } from 'react';

class Contents extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Contents;
*/