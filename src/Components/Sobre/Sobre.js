import React from 'react';
import { Helmet } from 'react-helmet';
import './Sobre.css';

const Sobre = () => {
  return (
    <section className="sobre  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página sobre" />
        <title>Sobre</title>
      </Helmet>
      <div className="container">
        <div className="sobre__item">
          <h1>THIAGO VIADÃUMM</h1>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
