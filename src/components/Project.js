import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

  const NLPproject = [
    {
      title: "Evidence Based Query",
      description: "Generating query to prepare query-focused summarization dataset",
      imgUrl: projImg4,
      myUrl:"https://github.com/deen-abdullah/EvidenceBasedQuery",
    },
    {
      title: "QAbsBert",
      description: "Query Focused Abstractive Summarization",
      imgUrl: projImg5,
      myUrl:"https://github.com/deen-abdullah/QABSBERT",
    },
    {
      title: "Summarization using GAT",
      description: "Work in progress",
      imgUrl: projImg9,
      myUrl:"https://github.com/deen-abdullah/gat",
    },
  ];

  const Courseproject = [
    {
      title: "Question Generation using Seq2Seq model with Attention",
      description: "Project completed as an assignment in one of the Ph.D. courses (Deep Learning for Natural Language Processing) at University of Lethbridge",
      imgUrl: projImg10,
      myUrl:"https://colab.research.google.com/drive/1EtftSOSKyIFkM8C6LtMTM4eDhXObtk59?usp=sharing",
    },
    {
      title: "Movie Review",
      description: "Project completed in one of the Ph.D. courses (Data Mining and Deep Learning) at University of Lethbridge",
      imgUrl: projImg8,
      myUrl:"https://github.com/deen-abdullah/Deep-Learning-for-Natural-Language-Processing",
    },
    {
      title: "Ensemble-based spam filtering",
      description: "Project completed in one of the M.Sc. courses (Advanced Data Processing) at University of Lethbridge",
      imgUrl: projImg6,
      myUrl:"https://github.com/deen-abdullah/Ensemble-based-spam-filtering",
    },
    {
      title: "Quantum Computing",
      description: "Project completed in one of the M.Sc. courses (Quantum Computing) at University of Lethbridge",
      imgUrl: projImg7,
      myUrl:"https://github.com/deen-abdullah/quantum-computing",
    },
  ];

  const project = [
    {
      title: "My Portfolio Website",
      description: "Using React App & JavaScript",
      imgUrl: projImg1,
      myUrl:"https://github.com/deen-abdullah/deen-abdullah.github.io/tree/master",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>You can view my projects below in three different sections: Thesis based includes some of my Language Processing oriented projects, Course based includes different projects that I completed during my academic years and Self-interest based includes Machine Learning and Data Science oriented projects.</p>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Thesis based</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Course Based</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Self-interest based</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                      <Row>
                        {
                          NLPproject.map((NLPproject, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...NLPproject}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          Courseproject.map((Courseproject, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...Courseproject}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          project.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}