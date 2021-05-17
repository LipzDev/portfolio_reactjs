import React from 'react';
import { Helmet } from 'react-helmet';
import foto1 from '../../Assets/foto.jpg';
import Next from '../Next-page/Next';
import './Sobre.css';

const Sobre = () => {
  return (
    <section className="sobre  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página sobre" />
        <title>Sobre</title>
      </Helmet>
      <div className="container-w2">
        <div className="sobre__item">
          <div className="sobre__text">
            <h1>Sobre</h1>
            <p>
              Tenho 22 anos e estou cursando Análise e Desenvolvimento de
              Sistemas! Moro em Dracena-SP e atualmente um dos meus principais
              objetivos é entrar no mercado de trabalho na área de TI como
              programador Front-End Júnior!
            </p>
            <Next route="/projetos" />
          </div>

          <div className="sobre__img">
            <img src={foto1} alt="Foto do criador do site!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
