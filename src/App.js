import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Pokemon from './pages/Pokemon';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/pokemon/:name'>
            <Pokemon />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
