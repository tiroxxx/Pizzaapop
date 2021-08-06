import './navbar.css';

export default function navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro">
            <img
              className="logo"
              src="./assets/pizzaapop-logo.jpg"
              alt="Pizzaapop"
            />
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
