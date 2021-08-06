import './hamburgerMenu.css';

export default function HamburgerMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'hamburgerMenu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}
