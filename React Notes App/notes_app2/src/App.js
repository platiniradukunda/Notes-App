import './App.css';
import NavBar from './components/NavBar';
import Quotes from './components/Quotes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      < Route exact path="/" component={NavBar}/>
      {/* < Route exact path="/" component={Quotes}/> */}
      {/* <Quotes/> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
