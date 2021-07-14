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