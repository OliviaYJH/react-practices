import React, {useState} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';

function Card({title, description, tasks}) {
    const [showTask, setShowTask] = useState(true);

    return (
        <div className={_Card}>
            <div 
                className={showTask ? [Card_Title, Card_Title_Open].join(' ') : Card_Title}
                onClick={() => setShowTask(!showTask)}
                >{title}</div>
            <div>{description}</div>

            { showTask ? <TaskList tasks={tasks}/> : null }
        </div>
    );
}

export default Card;