import React from 'react';
import { Helmet } from 'react-helmet';
import Next from '../Next-page/Next';
import './Inicio.css';

const Inicio = () => {
  return (
    <section className="inicio efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página inicial do meu portfólio!" />
        <title>Início</title>
      </Helmet>
      <div className="container-w2">
        <div className="inicio__item">
          <div className="inicio__text">
            <h2>
              Olá visitante <span>=)</span>
            </h2>

            <h1>Seja bem vindo !</h1>
            <p>
              Eu sou o Filipe, este é o meu portfólio! Espero que você tenha uma
              ótima experiência visitando meu website!
            </p>
            <Next route="/sobre" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
