import React, {useState, useEffect} from 'react';
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';
import axios from 'axios';

function TaskList({tasks, cardNo}) {
    const [taskList, setTaskList] = useState(tasks);

    const addTask = async(task) => {
        try {
            const response = await axios.post(`/kanbanboard/task`, task, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const jsonResult = response.data;

            if (jsonResult.result === 'fail') {
                throw new Error(`${jsonResult.message}`);
            }

            setTaskList([jsonResult.data, ...taskList]);

        } catch(err) {
            console.error(err.response ? `${err.response.status} ${err.response.data.message}` : err);
        }
    }

    const removeTaskFromList = (taskNo) => {
        setTaskList(taskList.filter(t => t.no !== taskNo)); // 제거하는 task의 no와 다른 애들만 남김
    };

    useEffect(() => {
        setTaskList(tasks); 
    }, [tasks]);

    return (
        <div className={Task_List}>
            <ul>
                {taskList?.map((task) => (
                    <Task 
                        key={task.no} 
                        no={task.no}
                        name={task.name}
                        done={task.done}
                        removeTaskFromList={removeTaskFromList}
                        />
                ))}
            </ul>
            <input 
                className={Input_Add_Task} 
                type='text' 
                placeholder={'태스크 추가'}
                onKeyDown={(e) => {
                    if(e.key == 'Enter') {
                        e.preventDefault();

                        try {
                            const inputTask = e.target.value;
                            if(inputTask === '') {
                                throw new Error(`validation ${inputTask} is empty`);
                            }
                            
                            const newTask = {
                                name: inputTask,
                                done: 'N',
                                cardNo: cardNo
                            }

                            addTask(newTask);

                            e.target.value = '';
                        } catch(err) {
                            console.error(err);
                        }
                        
                         console.log('enter');
                    }
                }}
                ></input>
        </div>
    );
}

export default TaskList;