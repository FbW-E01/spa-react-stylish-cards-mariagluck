import "./main.scss";
import whitePeak from "../images/jordan-steranka-lpddCskeg4A-unsplash.jpg";

function SassCard() {
  return (
    <div className="sass_card">
      <header className="sass_card_header">
      </header>
      <main className="content">
        <span className="card_content">SASS</span>
        <h2 className="card_title">SASS Styled Card</h2>
        <span className="card_description"
          >This card has been styled with SASS/SCSS in React js</span>
        <button className="sass_btn">SASS</button>
      </main>
    </div>
   
  );
}

export default SassCard;
