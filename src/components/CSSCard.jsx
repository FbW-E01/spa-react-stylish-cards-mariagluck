import "./style.css";
import yellowPeak from "../images/eberhard-grossgasteiger--z-7576DRPM-unsplash.jpg";

function CSSCard() {
  return (
    <div className="container">
      <div className="card">
        <div>
          <img src={yellowPeak} />
        </div>
        <div className="profile_container">
          <div className="profile_img">
            <img src={yellowPeak} />
          </div>
          <div className="details">
            <h4 className="title_text">CSS</h4>
          </div>
          <div className="where">
            <p className="grey_text">React js</p>
          </div>
          <div className="stats">
            <div>
              <p >80K</p>
              <p className="stats_name grey_text">Followers</p>
            </div>
            <div>
              <p>803K</p>
              <p className="stats_name grey_text">Likes</p>
            </div>
            <div>
              <p>1.4K</p>
              <p className="stats_name grey_text">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSSCard;



//Second version to make them look identical:

// import "./style.css";
// import yellowPeak from "../images/eberhard-grossgasteiger--z-7576DRPM-unsplash.jpg";

// function CSSCard() {
//   return (
//     <div>
//       <div className="card">
//         <div className="card_image">
//           <img src={yellowPeak} />
//         </div>
//         <div className="title ">
//           <h5>CSS Styled Card</h5>
//           <p>
//             This card has been styled using CSS used on separate CSS file in the
//             src folder.
//           </p>
//           <button className="cssBtn">CSS</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CSSCard;
