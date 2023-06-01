import { Card, Button, Col, Row } from "react-bootstrap";

const Cardnoticia = () => {
    return (
      <section>
        <Row className="ms-5 my-4 container">
        <Col md={4} lg={3}>
        <Card className="my-3"> 
      <Card.Img variant="top" src="https://c8.alamy.com/compes/e4g70x/noticias-e4g70x.jpg" />
      <Card.Body>
        <Card.Title>Diario J</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        </Row>
      </section>
    );
};

export default Cardnoticia;