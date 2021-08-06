import { useState } from 'react';
import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import HamburgerMenu from './components/hamburgerMenu/HamburgerMenu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Intro />
    </div>
  );
}

export default App;
