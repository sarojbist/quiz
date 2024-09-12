import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Quiz from './components/quiz';

function App() {
  return (
  <Router>
    <Routes>
    <Route path='/' element={ <Home />} />
    <Route path="/category/:category" element={<Quiz />} />
    </ Routes >
  </ Router >
  );
}

export default App;
