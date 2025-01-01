import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Publications/Cell';
import data from '../data/publications';

const Publications = () => (
  <Main title="Publications" description="Learn about Deen Mohammad Abdullah's publications.">
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2>
            <Link to="/publications">Publications</Link>
          </h2>
          <h3>
          Selected Publications
          </h3>
        </div>
      </header>
      {data.map((publication) => (
        <Cell data={publication} key={publication.title} />
      ))}
    </article>
  </Main>
);

export default Publications;
