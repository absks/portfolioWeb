import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';





const App = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
};

export default App;
