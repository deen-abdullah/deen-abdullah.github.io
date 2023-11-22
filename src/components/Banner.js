import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/deen.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "NLP Engineer", "Software Engineer", "Data Science Specialist", "Cloud Practitioner" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Deen`} </h1>
                <h2><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "NLP Engineer", "Software Engineer", "Data Science Specialist", "Cloud Practitioner" ]'><span className="wrap">{text}</span></span></h2>
<p> 
  I am an active learner and passionate about learning new technologies and tools.
</p>
<p>
  Currently, I am working as a researcher at the University of Lethbridge, where my research area includes analysis of programming languages to determine how the programming approaches or pattern differs based on demographics such as gender, age, region, and expertise of a programmer. I am using machine learning approaches to identify whether sociolinguistic factors and software metrics can determine the programming approaches of a programmer. To conduct my research, I have received the Alberta Innovates Scholarship ($31000/year for four years) from Alberta Innovates. 
</p>
<p>
  I completed my M.Sc. from the University of Lethbridge, majoring in Natural Language Processing (NLP). During my research, I worked on query-focused summarization tasks using the BERT-SUM model and published the work in one of the conferences (INLG) of ACL. Besides, I have hands-on experience using different ML models, including BERT, BART, Pegasus, T5, GPT, LED, XLNet and graph neural models GNN and GAT during my recent research works. 
</p>
<p>
  I worked as a software developer and was part of a software development team to develop software in the .NET platform. Additionally, I have been a part of different projects, for example, collaboration in Mitacs research projects and the design and development of a University Management System, which has given me the expertise of working in a team. 
</p>
<p>
  While working as a Lecturer at the University of Lethbridge, Alberta, Canada, I gained experience communicating with diverse people from different cultures. With my interpersonal skills, I guided my students to be “Problem solvers” and “Critical thinkers.”
</p>
<p>
  Languages that I prefer to work with are Python, C++, Java, C#, and JavaScript. I am also interested in cloud platforms, data science and deep learning models to develop ML models and find critical insights from the crazy data.
</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}