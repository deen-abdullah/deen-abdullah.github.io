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
            <li>Ph.D. Candidate, Mathematics & Computer Science Department, University of Lethbridge, Canada.</li>
            <li>7+ years of experience in software development and research with excellent analytical skills.</li>
            <li>10+ years of expertise in Mentoring, Supervising and Leadership roles by actively communicating with people from multicultural backgrounds.</li>
            <li>6+ years of experience in advising different problem-solving sessions including ML problems.</li>
            <li>4+ years of experience in working with the SOTA NLP models.</li>
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
