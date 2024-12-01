import { Col, Container, Image, Row } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <div id="landing-page">
      <div className="landing-green-background">
        <Container fluid className="py-3 text-center">
          <Row className="align-middle">
            <Col xs={4}>
              <Image src="next.svg" width="150px" alt="" />
            </Col>

            <Col xs={8} className="d-flex flex-column justify-content-center">
              <h3 style={{ paddingBottom: '20px', color: 'white' }}>
                What are your plans for the weekend?
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </main>
);

export default Home;
