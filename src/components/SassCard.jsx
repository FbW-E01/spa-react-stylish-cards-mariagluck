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



//Style to make the cards look identical:

// import "./main.scss";
// import whitePeak from "../images/jordan-steranka-lpddCskeg4A-unsplash.jpg";

// function SassCard() {
//   return (
//     <div>
//       <div className="sass_card">
//         <div className="card_img">
//           <img src={whitePeak} />
//         </div>
//         <div className="title_card">
//           <h5>SASS Styled Card</h5>
//           <p>
//             This card has been styled using some cool SASS saved on separate
//             file called main.
//           </p>
//           <button className="sassBtn">SASS</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SassCard;
