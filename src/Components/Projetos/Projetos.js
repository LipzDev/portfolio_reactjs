/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Helmet } from 'react-helmet';
import Next from '../Next-page/Next';
import site1 from '../../Assets/site1.png';
import site2 from '../../Assets/site2.png';
import site3 from '../../Assets/site3.png';
import site4 from '../../Assets/site4.png';
import site5 from '../../Assets/site5.png';
import site6 from '../../Assets/site6.png';
import './Projetos.css';

const Projetos = () => {
  return (
    <section className="projetos  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Página para apresentação de projetos"
        />
      </Helmet>
      <div className="container-w2">
        <div className="projetos__item">
          <h1>Projetos recentes</h1>
          <div className="projetos__content">
            <a
              className="projetos__overlay"
              target="_blank"
              rel="
              noopener
              noreferrer"
            >
              <img src={site1} alt="Preview do site 1" />
            </a>
            <a
              className="projetos__overlay"
              target="_blank"
              rel="
              noopener
              noreferrer"
            >
              <img src={site2} alt="Preview do site 2" />
            </a>
            <a
              className="projetos__overlay"
              target="_blank"
              rel="
              noopener
              noreferrer"
            >
              <img src={site3} alt="Preview do site 3" />
            </a>
            <a
              className="projetos__overlay"
              target="_blank"
              rel="
              noopener
              noreferrer"
            >
              <img src={site4} alt="Preview do site 4" />
            </a>
            <a
              className="projetos__overlay"
              target="_blank"
              rel="
              noopener
              noreferrer"
            >
              <img src={site5} alt="Preview do site 5" />
            </a>
            <a
              className="projetos__overlay"
              target="_blank"
              rel="
              noopener
              noreferrer"
            >
              <img src={site6} alt="Preview do site 6" />
            </a>
          </div>
          <Next route="/repositorios" />
        </div>
      </div>
    </section>
  );
};

export default Projetos;
