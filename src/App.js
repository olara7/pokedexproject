import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Pokemon from './pages/Pokemon';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/pokemon/:name' element={<Pokemon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
