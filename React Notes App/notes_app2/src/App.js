import './App.css';
import NavBar from './components/NavBar';
import Quotes from './components/Quotes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Quotes/>
    </div>
  );
}

export default App;
