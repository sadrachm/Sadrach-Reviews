import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/General/Header.jsx';
import Footer from './components/General/Footer.jsx';
import Games from './components/Game/Games.jsx'
import Game from "./components/Game/Game.jsx";
import Home from "./components/General/Home.jsx";
import Animes from "./components/Anime/Animes.jsx";
import Anime from "./components/Anime/Anime.jsx";
import Movies from "./components/Movie/Movies.jsx";
import Movie from "./components/Movie/Movie.jsx";
import Compose from "./components/Compose/Compose.jsx";
import Success from "./components/Compose/Success.jsx";

import './App.css';

function App() {
 

  return <div>
    <Router>
        <Header />
        <Switch>
          <Route path="/games/:id"><Game /></Route>
          <Route path="/games" exact component={() => <Games />} />
          <Route path="/animes/:id" exact component={() => <Anime />} />
          <Route path="/animes" exact component={() => <Animes />} />
          <Route path="/movies/:id" exact component={() => <Movie />} />
          <Route path="/movies" exact component={() => <Movies />} />
          <Route path="/" exact component={() => <Home />} />
          <Route path="/compose" exact component={() => <Compose />} />
          <Route path="/success" exact component={() => <Success />} />
        </Switch>
        <Footer />
    </Router>
  </div>
}
export default App;