import React from "react";
import { Helmet } from "react-helmet";
import icon1 from "../../Assets/face.png";
import icon2 from "../../Assets/wpp1.png";
import icon3 from "../../Assets/lkd.png";
import icon4 from "../../Assets/github.png";
import "./Contato.css";

const Contato = () => {
  return (
    <section className="contato  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página de formulário de contato" />
      </Helmet>
      <div className="container">
        <h1>Vamos Conversar?</h1>
        <p className="contato__description">
          Estou sempre aberto a novas oportunidades e colaborações. Entre em
          contato através das minhas redes sociais ou envie uma mensagem direta.
        </p>
        <div className="contato__item">
          <a href="https://api.whatsapp.com/send/?phone=5518996855200&text=Olá Filipe Gomes... &app_absent=0">
            <img src={icon2} alt="Icone do Whatsapp" />
            <span>Whatsapp</span>
            <p>Visitar</p>
          </a>
          <a
            href="https://www.linkedin.com/in/lipzdev/"
            target="_blank"
            rel="
              noopener
              noreferrer"
          >
            <img src={icon3} alt="Icone do LinkedIn" />
            <span>LinkedIn</span>
            <p>Visitar</p>
          </a>
          <a
            href="https://github.com/LipzDev"
            target="_blank"
            rel="
              noopener
              noreferrer"
          >
            <img src={icon4} alt="Icone do Github" />
            <span>GitHub</span>
            <p>Visitar</p>
          </a>
        </div>
        <div className="on-mobile">
          <h2>Obrigado pela visita! 🚀</h2>
          <p>
            Foi um prazer ter você por aqui! Sinta-se à vontade para entrar em
            contato através de qualquer uma das redes sociais acima. Estou
            sempre disponível para conversar sobre projetos, oportunidades ou
            apenas trocar experiências sobre tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contato;
