import React from 'react';
import Card from './Card.js';
import {Card_List} from './assets/scss/CardList.scss';


function CardList({title, datas}) {
    return (
        <div className={Card_List}>
            <h1>{title}</h1>
            {datas.map((e) =>
                <Card 
                    key={e.no}
                    title={e.title}
                    description={e.description}
                    tasks={e.tasks}
                    />
            )}
        </div>
    );
}

export default CardList;