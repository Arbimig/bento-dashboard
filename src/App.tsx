import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Board from './pages/Board';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/board" element={<Board />} />
        <Route path="/" element={<div>Welcome! Go to <a href="/board">/board</a></div>} />
      </Routes>
    </Router>
  );
}


export default App
