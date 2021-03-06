import styled from "styled-components";
import greenPeak from "../images/mark-williams-tahWcRGqIcg-unsplash.jpg";

const Btn = styled.button`
  color: #998b68;
  font-weight: bold;
  margin-top: 20px;
  background: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;

const CardDiv = styled.div`
  background-image: url(${greenPeak});
  width: 290px;
  height: 760px;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
`;


const Title = styled.div`
  color: white;
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;


function StyledComponent() {
    return (
        <CardDiv>
            <Title>
                <h5>Styled-Components Card</h5>
                <p>This card has been styled using Styled-Components.</p>
                <Btn>Styled-Components</Btn>
            </Title>
        </CardDiv>
    );
}


export default StyledComponent;



//Style to make them look identical:

// import styled from "styled-components";
// import greenPeak from "../images/mark-williams-tahWcRGqIcg-unsplash.jpg";

// const Btn = styled.button`
//   color: white;
//   margin-top: 20px;
//   background: green;
//   border: none;
//   border-radius: 5px;
//   padding: 5px;
// `;

// const CardDiv = styled.div`
//   width: 290px;
//   border-radius: 10px;
//   height: 360px;
//   margin-top: 30px;
// `;
// const CardImg = styled.div`
//   border-radius: 10px;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
// `;

// const Title = styled.div`
//   color: black;
//   width: inherit;
//   background-color: white;
//   padding: 20px;
//   border-bottom-left-radius: 10px;
//   border-bottom-right-radius: 10px;
//   box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
//     -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
//   cursor: pointer;
//   transition: 0.4s;
// `;

// const Picture = styled.div`
//   background-image: url(${greenPeak});
//   width: 290px;
//   height: 420px;
//   background-size: cover;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
//   box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
//     -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
//   cursor: pointer;
//   transition: 0.4s;
// `;

// function StyledComponent() {
//     return (
//         <CardDiv>
//             <CardImg>
//                 <Picture />
//             </CardImg>
//             <Title>
//                 <h5>Styled-Components Card</h5>
//                 <p>This card has been styled using Styled-Components.</p>
//                 <Btn>Styled-Components</Btn>
//             </Title>
//         </CardDiv>
//     );
// }


// export default StyledComponent; 