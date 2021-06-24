import './App.css';
import NavBar from './components/NavBar';
import ReviewPostPage from './components/ReviewPostPage';
import Thanks from './components/Thanks';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      < Route exact path="/" component={NavBar}/>
      < Route exact path="/review" component={ReviewPostPage}/>
      < Route exact path="/thanks" component={Thanks}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
