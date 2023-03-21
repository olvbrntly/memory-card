
import './App.css';
import michael from './images/michael.png'

function App() {
  return (
    <div className="App">
      <h1>MEMORY GAME</h1> {/* this will be in the dundermifflin font */}
      <div>
        <img src={michael} alt='michael scott'/>
      </div>
    </div>
  );
}

export default App;
