import './App.css';
import MainSection from './components/MainSection/MainSection';
import TopAppBar from './components/TopBar/TopAppBar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <TopAppBar />
      <div className="main-section-container">
        <MainSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
