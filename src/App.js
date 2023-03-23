
import './App.css';
import { useEffect } from 'react';
import useState from 'react-usestateref';
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

  //const initialClickedCharacters = []
  const [characters, setCharacters] = useState(initialCharacters);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [currentId, setCurrentId, Idref] = useState('');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] =useState(0);
  const [gameOver, setGameOver] = useState(false)

  function playRound(id){
    //get the character id
    setGameOver(false) 
    setCurrentId(id);
    addClickedCharacter(Idref.current);
    shuffle(characters)
  }

  function addClickedCharacter(id){
    if(clickedCharacters.length < 1){
      setClickedCharacters(prev => [...prev, id])
      setScore(1)
    }
    else if(!(clickedCharacters).includes(id)){
      setClickedCharacters(prev => [...prev, id])
      setScore(score + 1)
      }
    else{
        //alert('game over')
        setClickedCharacters([]);
        if(score > bestScore){
          setBestScore(score);
          setScore(0)
        }else{
          setScore(0);
        }
        setGameOver(true)
      }
    }

    function shuffle(array){
      let currentIndex = array.length, randomIndex;

      while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()* currentIndex)
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]
        ];
      }
      return array;
    }
  
  return (
    <div className="App">
     <Header score={score} bestScore={bestScore}/>
     <CardHolder characters={characters} playRound={playRound} />
    </div>
  );
}

export default App;


    //add the character to the clicked array
   // addClickedCharacter(Idref.current);
