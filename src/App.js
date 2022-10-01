import './App.css';
import Home from './components/Home';
import Surah from './components/Surah'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path='/surah/:id' element={<Surah />} />
        </Routes>
    </Router>
  )
}

export default App;
