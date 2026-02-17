import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Deen Mohammad Abdullah's personal website."
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">My personal website</Link>
          </h2>
          <p>
          AI Engineer (Applied ML & LLM Systems) — LLM Pipelines, Speech-to-Text, GPU Optimization, AWS & Azure
          </p>
        </div>
      </header>
      <p>
        {' '}
        <strong>Hi, I’m Dr. Deen — an AI Engineer specializing in Applied Machine Learning and LLM Systems.</strong>
      </p> 
      <p>
        I design and deploy scalable <strong>LLM pipelines, speech-to-text platforms, and GPU-efficient AI infrastructure</strong> across <strong>AWS and Azure</strong>, focusing on building production-grade intelligent systems that improve performance, scalability, and cost efficiency.
      </p>
      <p>
        Explore my work below to learn more about my research, engineering projects, and applied AI solutions.
      </p>
      
    </article>
  </Main>
);

export default Index;
