import ReactDOM from "react-dom";
import Cardboostrap from "./components/Cardboostrap.jsx";
import SassCard from "./components/SassCard.jsx";
import CSSCard from "./components/CSSCard.jsx";
import StyledComponent from "./components/StyledComponent.jsx";

ReactDOM.render(
  <div className="wrapper">
    <CSSCard />
    <SassCard />
    <Cardboostrap />
    <StyledComponent />
  </div>,
  document.querySelector("#root")
);
