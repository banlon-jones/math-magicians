import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import CalculatorPage from './pages/calculator/calculator-page';
import Quote from './pages/quote/quote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
