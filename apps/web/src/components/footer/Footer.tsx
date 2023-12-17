import { Container, Row, Col } from 'react-bootstrap';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>The Island Express Grill &copy; {CURRENT_YEAR}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
