import './hamburgerMenu.css';

export default function HamburgerMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'hamburgerMenu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#home">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
