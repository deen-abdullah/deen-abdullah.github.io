import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Education: () => <Education data={degrees} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Deen Mohammad Abdullah's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
          <ul>
            <li>
              7+ years of experience designing, deploying, and evaluating machine learning and
              LLM-based systems across applied research and enterprise environments.
            </li>
            <li>
              Hands-on expertise in LLM pipelines, fine-tuning, RAG systems, semantic search,
              summarization, and classification using state-of-the-art transformer models.
            </li>
            <li>
              Strong experience building speech-to-text and NLP solutions, including Whisper-based
              pipelines and structured data extraction workflows.
            </li>
            <li>
              End-to-end ML system development experience covering data processing, model training,
              evaluation, deployment, monitoring, and API-based production integration.
            </li>
            <li>
              Proven ability to design GPU-efficient, cost-aware ML infrastructure using Docker,
              AWS, Azure, Databricks, and on-premise GPU environments.
            </li>
          </ul>

            
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
