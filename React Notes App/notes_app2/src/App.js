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
        {/* path to homepage where you can add and delete notes */}
        < Route exact path="/" component={NavBar}/>
        {/* path to page where you can post a review */}
        < Route exact path="/review" component={ReviewPostPage}/>
        {/* path to thanks component that shows a gratitude message */}
        < Route exact path="/thanks" component={Thanks}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
