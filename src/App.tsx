import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Board from './pages/Board';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/board" element={<Board />} />
        <Route
          path="/"
          element={
            <div>
              Welcome! Go to <Link to="/board">/board</Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;