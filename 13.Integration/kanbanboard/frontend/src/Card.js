import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';
import axios from 'axios';

function Card({cardNo, title, description}) {
    const [showTask, setShowTask] = useState(true);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await axios.get(`/kanbanboard/task?cardNo=${cardNo}`)
            const jsonResult = response.data;

            setTasks(jsonResult.data);
        } catch(err) {
            console.error(err.response ? `${err.response.status} ${err.response.data.message}` : err);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, [cardNo]); // cardNo에 대한 fetchTasks 호출

    return (
        <div className={_Card}>
            <div 
                className={showTask ? [Card_Title, Card_Title_Open].join(' ') : Card_Title}
                onClick={() => setShowTask(!showTask)}
                >{title}</div>
            <div>{description}</div>

            { showTask ? <TaskList tasks={tasks} cardNo={cardNo}/> : null }
        </div>
    );
}

export default Card;