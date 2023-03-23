
import './App.css';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import CardHolder from './components/Cardholder';




function App() {

  let initialCharacters = [

    {
      id:1,
      name:'Michael Scott',
      imgURL: require('./images/michael.png'),
    },

    {
      id:2,
      name:'Dwight Shrute',
      imgURL: require('./images/dwight.png'),
    },

    {
      id:3,
      name:'Jim Halpert',
      imgURL: require('./images/jim.png'),
    },

    {
      id:4,
      name:'Pam Beesley',
      imgURL: require('./images/pam.png'),
    },

    {
      id:5,
      name:'Angela Martin',
      imgURL: require('./images/angela.png'),
    },

    {
      id:6,
      name:'Oscar Martinez',
      imgURL: require('./images/oscar.png'),
    },

    {
      id:7,
      name:'Kevin Malone',
      imgURL: require('./images/kevin.png'),
    },

    {
      id:8,
      name:'Meredith Palmer',
      imgURL: require('./images/meredith.png'),
    },

    {
      id:9,
      name:'Creed Bratton',
      imgURL: require('./images/creed.png'),
    },

    {
      id:10,
      name:'Phyllis Vance',
      imgURL: require('./images/phyllis.png'),
    },

    {
      id:11,
      name:'Stanley Hudson',
      imgURL: require('./images/stanley.png'),
    },

    {
      id:12,
      name:'Ryan Howard',
      imgURL: require('./images/ryan.png'),
    },
  ]

  const [characters, setCharacters] = useState(initialCharacters);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [currentName, setCurrentName] = useState('');

  function getCharacter(name){
   setCurrentName(name);
  }

  return (
    <div className="App">
     <Header />
     <CardHolder characters={characters} getCharacter={getCharacter}/>
    </div>
  );
}

export default App;
