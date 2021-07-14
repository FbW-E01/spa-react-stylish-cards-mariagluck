import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pinkPeak from "../images/boris-baldinger-eUFfY6cwjSU-unsplash.jpg";

function Cardboostrap() {
  return (
    <Card style={({ width: "18rem" }, { margin: 30 })}>
      <Card.Img variant="top" src={pinkPeak} />
      <Card.Body>
        <Card.Title>Bootstrap</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Bootstrap</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardboostrap;
