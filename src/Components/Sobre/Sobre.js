import React from "react";
import { Helmet } from "react-helmet";
import Next from "../Next-page/Next";
import "./Sobre.css";

const Sobre = () => {
  const birthday = 1998;
  const currentDate = new Date().getUTCFullYear() - birthday;

  return (
    <section className="sobre efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Sobre Filipe Gomes - Desenvolvedor Front-End"
        />
      </Helmet>
      <div className="container-w2">
        <div className="sobre__header">
          <h1>Sobre Mim</h1>
          <p className="sobre__subtitle">
            Desenvolvedor apaixonado por criar experiências digitais
            excepcionais
          </p>
        </div>

        <div className="sobre__content">
          <div className="sobre__left">
            <div className="sobre__cards">
              <div className="info-card">
                <div className="card__icon">💻</div>
                <div className="card__content">
                  <h3>Especialização</h3>
                  <div className="specialization__content">
                    <div className="specialization__item">
                      <div className="item__text">
                        <strong>Front-End:</strong> React, TypeScript, Next.js,
                        TailwindCSS
                      </div>
                    </div>
                    <div className="specialization__item">
                      <div className="item__text">
                        <strong>Back-End (estudando):</strong> Node.js, NestJS,
                        TypeORM, PostgreSQL
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="card__icon">🏠</div>
                <div className="card__content">
                  <h3>Atuação</h3>
                  <p>
                    Trabalho de forma <strong>remota (home office)</strong>,
                    sempre conectado com as últimas tendências e tecnologias do
                    mercado.
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="card__icon">🚀</div>
                <div className="card__content">
                  <h3>Objetivos</h3>
                  <p>
                    Busco constantemente novos{" "}
                    <strong>desafios e oportunidades</strong> para crescer
                    profissionalmente e contribuir com projetos inovadores.
                  </p>
                </div>
              </div>
            </div>

            <div className="sobre__next">
              <Next route="/repositorios" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
