import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h3>Deen Mohammad Abdullah, PhD</h3>
        <p>
          <a href="mailto:deen.m.abdullah@gmail.com">deen.m.abdullah@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <aside className="sidebar-intro">
        <h2>About</h2>
        <p><strong>Dr. Deen</strong></p>
        <p>AI Engineer (Applied ML &amp; LLM Systems)</p>
        <p>LLM Pipelines • Speech-to-Text • GPU Efficiency • AWS/Azure</p>
        <p>Building scalable, production-ready AI systems.</p>
      </aside>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Deen Mohammad Abdullah <Link to="/">deen-abdullah.github.io</Link>.
      </p>
      Last updated: February 17, 2026.
    </section>
  </section>
);

export default SideBar;
