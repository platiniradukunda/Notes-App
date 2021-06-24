import './App.css';
import NavBar from './components/NavBar';
import ReviewPostPage from './components/ReviewPostPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      < Route exact path="/" component={NavBar}/>
      < Route exact path="/review" component={ReviewPostPage}/>
      < Route exact path="/notes" component={NavBar}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
