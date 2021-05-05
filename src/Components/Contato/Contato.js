import React from 'react';
import { Helmet } from 'react-helmet';
import './Contato.css';

const Contato = () => {
  return (
    <section className="contato  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página de formulário de contato" />
        <title>Contato</title>
      </Helmet>
      <div className="container">
        <div className="contato__item">
          <h1>CONTATO</h1>
        </div>
      </div>
    </section>
  );
};

export default Contato;
