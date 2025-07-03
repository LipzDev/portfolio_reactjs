import React from "react";
import { Helmet } from "react-helmet";
import foto1 from "../../Assets/foto.png";
import Next from "../Next-page/Next";
import "./Sobre.css";

const Sobre = () => {
  const birthday = 1998;
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
            <h1>Sobre Mim</h1>
            <p>
              Tenho {currentDate} anos e sou formado em Análise e
              Desenvolvimento de Sistemas. Sou apaixonado por criar experiências
              digitais excepcionais e transformar designs em código funcional e
              elegante.
              <br />
              <br />
              <strong>Especialização:</strong> Desenvolvimento Front-End com
              foco em React, TypeScript, Next.js e TailwindCSS. Atualmente estou
              expandindo meus conhecimentos para o ecossistema Back-End,
              estudando Node.js, NestJS, TypeORM e PostgreSQL.
              <br />
              <br />
              <strong>Atuação:</strong> Trabalho de forma remota (home office),
              sempre conectado com as últimas tendências e tecnologias do
              mercado. Estou em busca constante de novos desafios e
              oportunidades para crescer profissionalmente e contribuir com
              projetos inovadores.
            </p>
            <Next route="/repositorios" />
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
