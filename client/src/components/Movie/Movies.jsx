import React, {useState } from 'react';
import Card from '../General/Card.jsx';

function Movies() {
    const [items, setItems] = useState([]);
    React.useEffect(() => {
      fetch("/api/movie")
        .then((res) => res.json())
        .then((data) => {setItems(data)})
    }, []);
    return <div>
    <h1 className="title ">Movies</h1>
    <div className="box">    
    {items.map(movie => {
        return <Card 
        type = {movie.type}
        id = {movie.id}
        key = {movie.id}
        title={movie.title}
        content={movie.content}
        imgURL={movie.imgURL}
        />})}
    </div>
</div>
};
export default Movies;
