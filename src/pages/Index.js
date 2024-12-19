import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Deen Mohammad Abdullah's personal website. I am a Data analyst, Machine learning engineer," +
      " and Ph.D. candidate at the University of Lethbridge, Canada."
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">My personal website</Link>
          </h2>
          <p>
          I am a Data analyst, Machine learning engineer,
           and Ph.D. candidate at the University of Lethbridge, Canada.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/deen-abdullah/deen-abdullah.github.io/tree/main">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
