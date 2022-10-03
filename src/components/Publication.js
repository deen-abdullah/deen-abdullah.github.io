import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Publication = () => {

    return (
        <section className="publication" id="publication">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Publications</h2>
                <p>I have 14 publications with 01 journal and 13 conferences.</p>
                <Tab.Container id="publication-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Recent Publication</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">MSc Thesis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Ready to be published</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">More</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      <p><a href="https://aclanthology.org/2020.inlg-1.11/" target="_blank">"Towards Generating Query to Perform Query Focused Abstractive Summarization using Pre-trained Model"</a>, 13th International Conference on Natural Language Generation (INLG) - ACL, Dublin Ireland, December, 2020.</p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p><a href="https://opus.uleth.ca/handle/10133/5760" target="_blank">"Query focused abstractive summarization using BERTSUM model"</a>, University of Lethbridge, Canada, 2020.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Generating Query-Focused Summarization Datasets from Query-Free Summarization Datasets: This work proposes an evidence-based model to generate queries from query-free datasets.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <p><a href="https://scholar.google.com/citations?user=eOjoaA0AAAAJ&hl=en" target="_blank">Google Scholar Link</a></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
    )
}