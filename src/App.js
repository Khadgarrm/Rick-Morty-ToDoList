import './App.css';
import React, { useEffect, useState} from 'react'
import Header from './components/Header/Header';
import Character from './components/CharactersPage/Home'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ToDoForm from './components/WatchList/ToDoForm';


const Characters_API = "https://rickandmortyapi.com/api/character";

const EpisodesAPI = "https://rickandmortyapi.com/api/episode";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(Characters_API).then(res => res.json())
    .then(data => {
      console.log(data);
      
      setCharacters(data.results);
    });
    
  }, [])

  return (
      <div>
          <Header/>
          {characters.map((character) => (
        <Character key={character.id} {...character}/>
      ))}
      <ToDoForm/>

    </div>
  );
}

export default App;
