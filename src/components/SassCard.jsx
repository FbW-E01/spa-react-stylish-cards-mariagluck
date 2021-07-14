import "./main.scss";
import whitePeak from "../images/jordan-steranka-lpddCskeg4A-unsplash.jpg";

function SassCard() {
  return (
    <div>
      <div className="sass_card">
        <div className="card_img">
          <img src={whitePeak} />
        </div>
        <div className="title_card">
          <h5>SASS Styled Card</h5>
          <p>
            This card has been styled using some cool SASS saved on separate
            file called main.
          </p>
          <button className="sassBtn">SASS</button>
        </div>
      </div>
    </div>
  );
}

export default SassCard;
