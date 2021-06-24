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
      </Switch>
    </div>
    </Router>
  );
}

export default App;
