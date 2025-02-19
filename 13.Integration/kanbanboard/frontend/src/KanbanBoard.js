import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';
import axios from 'axios';

function KanbanBoard() {
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try {
            const response = await axios.get(`/kanbanboard/card`);
            const jsonResult = response.data;

            setCards(jsonResult.data);        
        } catch(err) {
            console.error(err.response ? `${err.response.status} ${err.response.data.message}` : err);
        }
    }

    useEffect(() => {
        fetchCards();
    }, []);

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