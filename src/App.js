import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainSection from './components/MainSection/MainSection';
import About from './components/About/About.tsx';
import Contact from './components/Contact/Contact';
import TopAppBar from './components/TopBar/TopAppBar';
import Chat from './components/Chat/Chat.tsx';
import { Footer } from './components/Footer/Footer';
import { inject } from '@vercel/analytics';

const AppContent = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  // Analytics
  inject();

  return (
    <div className="App">
      <TopAppBar />
      <div className="main-section-container">
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/home" element={<MainSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
