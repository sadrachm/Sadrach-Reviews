import React, {useState } from 'react';
import Card from '../General/Card.jsx';

function Animes() {
    const [items, setItems] = useState([]);
    React.useEffect(() => {
      fetch("/api/anime")
        .then((res) => res.json())
        .then((data) => {setItems(data)})
    }, []);
    return <div>
    <h1 className="title ">Animes</h1>
    <div className="box">    
    {items.map(anime => {
        return <Card 
        type = {anime.type}
        id = {anime.id}
        key = {anime.id}
        title={anime.title}
        content={anime.content}
        imgURL={anime.imgURL}
        />})}
    </div>
</div>
};

export default Animes;
