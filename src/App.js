import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSection from './components/MainSection/MainSection';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import TopAppBar from './components/TopBar/TopAppBar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <TopAppBar />
        <div className="main-section-container">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/home" element={<MainSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
