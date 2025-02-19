import React, { useState, useEffect } from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';
import axios from 'axios';

function Task({no, name, done, removeTaskFromList}) {
    const [isChecked, setIsChecked] = useState(done == 'Y');

    const changeTaskDone = async(taskDone) => {
        try {
            await axios.put(`/kanbanboard/task/${no}?done=${taskDone}`);
            setIsChecked(!isChecked);
        } catch(err) {
            console.error(err.response ? `${err.response.status} ${err.response.data.message}` : err);
        }
    }

    const removeTask = async() => {
        try {
            await axios.delete(`/kanbanboard/task/${no}`);
            removeTaskFromList(no);
        } catch(err) {
            console.error(err.response ? `${err.response.status} ${err.response.data.message}` : err);
        }
    }

    const handleCheckboxChange = () => {
        changeTaskDone(!isChecked ? 'Y' : 'N');
    };

    return (
        <li className={_Task}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            &nbsp; {name} &nbsp;
            <a href="#" 
                className={Task_Remove}
                onClick={(e) => {
                    e.preventDefault();
                    removeTask();
                }}></a>
        </li>
    );
}

export default Task;