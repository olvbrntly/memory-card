
import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import CardHolder from './components/Cardholder';




function App() {

  let initialCharacters = [

    {
      id:1,
      name:'Michael Scott',
      imgURL: require('./images/michael.png'),
      clicked:false,
    },

    {
      id:2,
      name:'Dwight Shrute',
      imgURL: require('./images/dwight.png'),
      clicked:false,
    },

    {
      id:3,
      name:'Jim Halpert',
      imgURL: require('./images/jim.png'),
      clicked:false,
    },

    {
      id:4,
      name:'Pam Beesley',
      imgURL: require('./images/pam.png'),
      clicked:false,
    },

    {
      id:5,
      name:'Angela Martin',
      imgURL: require('./images/angela.png'),
      clicked:false,
    },

    {
      id:6,
      name:'Oscar Martinez',
      imgURL: require('./images/oscar.png'),
      clicked:false,
    },

    {
      id:7,
      name:'Kevin Malone',
      imgURL: require('./images/kevin.png'),
      clicked:false,
    },

    {
      id:8,
      name:'Meredith Palmer',
      imgURL: require('./images/meredith.png'),
      clicked:false,
    },

    {
      id:9,
      name:'Creed Bratton',
      imgURL: require('./images/creed.png'),
      clicked:false,
    },

    {
      id:10,
      name:'Phyllis Vance',
      imgURL: require('./images/phyllis.png'),
      clicked:false,
    },

    {
      id:11,
      name:'Stanley Hudson',
      imgURL: require('./images/stanley.png'),
      clicked:false,
    },

    {
      id:12,
      name:'Ryan Howard',
      imgURL: require('./images/ryan.png'),
      clicked:false,
    },
  ]

  const [characters, setCharacters] = useState(initialCharacters)

  return (
    <div className="App">
     <Header />
     <CardHolder characters={characters}/>
    </div>
  );
}

export default App;
