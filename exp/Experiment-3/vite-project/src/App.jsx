import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Section from './pages/Section';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/section/:id" element={<Section />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
