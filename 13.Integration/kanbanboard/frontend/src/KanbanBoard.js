import React, { useState } from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';
import datas from './assets/json/data.js';

function KanbanBoard() {
    const [cards, setCards] = useState(datas);

    return (
        <div className={'Kanban_Board'}>
            <CardList 
                title={'To Do'} 
                datas={cards.filter(card => card.status === 'ToDo')}/>
            <CardList 
                title={'Doing'} 
                datas={cards.filter(card => card.status === 'Done')}/>
            <CardList 
                title={'Done'} 
                datas={cards.filter(card => card.status === 'Doing')}/>
        </div>
    );
}

export default KanbanBoard;