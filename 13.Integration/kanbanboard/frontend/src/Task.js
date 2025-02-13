import React, { useState } from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done}) {
    const [isChecked, setIsChecked] = useState(done == 'Y');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <li className={_Task}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            &nbsp; {name} &nbsp;
            <a href="#" className={Task_Remove}></a>
        </li>
    );
}

export default Task;