import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">
        <a href={data.link}>{data.school}</a>
      </p>
      <p lassName="school">
      CGPA: {data.cgpa} , {data.year}
      </p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    cgpa: PropTypes.string,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Degree;