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
      </Helmet>
      <div className="container-w2">
        <div className="sobre__item">
          <div className="sobre__text">
            <h1>Sobre</h1>
            <p>
              Tenho 22 anos e estou cursando Análise e Desenvolvimento de
              Sistemas e atualmente meu foco principal é o desenvolvimento web
              Front-End! Moro no interior de São Paulo em uma cidade chamada
              Dracena, um dos meus principais objetivos no momento é dominar as
              tecnologias JavaScript, React JS, Next JS e também começar a
              estudar sobre UI Design!
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
