import logo from './logo.svg';
import './App.css';
import FizzBuzz from './module/FizzBuzz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FizzBuzz />
      </header>
     
    </div>
  );
}

export default App;
