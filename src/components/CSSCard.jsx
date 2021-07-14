import "./style.css";
import yellowPeak from "../images/eberhard-grossgasteiger--z-7576DRPM-unsplash.jpg";

function CSSCard() {
  return (
    <div>
      <div className="card">
        <div className="card_image">
          <img src={yellowPeak} />
        </div>
        <div className="title ">
          <h5>CSS Styled Card</h5>
          <p>
            This card has been styled using CSS used on separate CSS file in the
            src folder.
          </p>
          <button className="cssBtn">CSS</button>
        </div>
      </div>
    </div>
  );
}

export default CSSCard;
