import './navbar.css';

export default function navbar() {
  return (
    <div className="navbar">
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
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
