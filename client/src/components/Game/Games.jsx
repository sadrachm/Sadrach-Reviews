import React, {useState } from 'react';
import Card from '../General/Card.jsx';

function Games() {
    const [items, setItems] = useState([]);
    React.useEffect(() => {
      fetch("/api/game")
        .then((res) => res.json())
        .then((data) => {setItems(data)})
    }, []);
    return <div>
    <h1 className="title ">Games</h1>
    <div className="box">    
    {items.map(game => {
        return <Card 
        type = {game.type}
        id = {game.id}
        key = {game.id}
        title={game.title}
        content={game.content}
        imgURL={game.imgURL}
        />})}
    </div>
</div>
};
export default Games;
