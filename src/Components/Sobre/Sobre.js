import React from 'react';
import { Helmet } from 'react-helmet';
import foto1 from '../../Assets/foto.png';
import Next from '../Next-page/Next';
import './Sobre.css';

const Sobre = () => {
  const birthday = 1998
  const currentDate = new Date().getUTCFullYear() - birthday;


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
              Tenho {currentDate} anos, sou formado em Análise e Desenvolvimento de
              Sistemas, meu foco principal é o desenvolvimento web
              Front-End, mas tenho interesse em adquirir conhecimentos também na área de Back-End com NodeJS! Sou do interior de São Paulo, sigo estudando em busca dos meus objetivos! <br></br><br></br>
              Principais tecnologias que trabalho atualmente: Typescript, ReactJS, NextJS, GraphQL, Firebase!
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
