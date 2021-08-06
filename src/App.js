import { useState } from 'react';
import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import HamburgerMenu from './components/hamburgerMenu/HamburgerMenu';
import About from './components/about/About';
import ImageSlider from './components/carousel/ImageSlider';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <ImageSlider />
      </div>
    </div>
  );
}

export default App;
