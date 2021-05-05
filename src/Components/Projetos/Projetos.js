import React from 'react';
import { Helmet } from 'react-helmet';
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
        <title>Projetos</title>
      </Helmet>
      <div className="container">
        <div className="projetos__item">
          <h1>PROJETOS</h1>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
