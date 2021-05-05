import React from 'react';
import { Helmet } from 'react-helmet';
import './Repositorios.css';

const Repositorios = () => {
  return (
    <section className="repositorios  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página de repositórios do github." />
        <title>Repositórios</title>
      </Helmet>
      <div className="container">
        <div className="repositorios__item">
          <h1>REPOSITORIO</h1>
        </div>
      </div>
    </section>
  );
};

export default Repositorios;
