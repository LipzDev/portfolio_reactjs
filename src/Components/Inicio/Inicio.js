import React from "react";
import { Helmet } from "react-helmet";
import Next from "../Next-page/Next";
import "./Inicio.css";

const Inicio = () => {
  return (
    <section className="inicio efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfólio profissional de Filipe Gomes - Desenvolvedor Front-End"
        />
      </Helmet>
      <div className="container-w2">
        <div className="inicio__item">
          <div className="inicio__text">
            <h2>
              Olá, eu sou <span>Filipe Gomes</span> 👋
            </h2>

            <h1>Desenvolvedor Front-End</h1>
            <p>
              Transformo ideias em experiências digitais incríveis através do
              desenvolvimento web. Especializado em React, TypeScript e Next.js,
              crio interfaces modernas e responsivas que proporcionam a melhor
              experiência para o usuário.
            </p>
            <Next route="/sobre" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
