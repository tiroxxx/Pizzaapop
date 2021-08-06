import './intro.css';

export default function Intro() {
  return (
    <div className="intro">
      <img className="introImage" src="./assets/pizza-jumbo.jpg" alt="Pizza" />
      <div className="introFigure"></div>
      <div className="introInfo">
        <h1>Pizzaapop</h1>
      </div>
    </div>
  );
}
