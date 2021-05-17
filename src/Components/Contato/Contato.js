import React from 'react';
import { Helmet } from 'react-helmet';
import icon1 from './Assets/face.png';
import icon2 from './Assets/wpp1.png';
import icon3 from './Assets/lkd.png';
import icon4 from './Assets/github.png';
import './Contato.css';

const Contato = () => {
  return (
    <section className="contato  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página de formulário de contato" />
        <title>Portfólio | Contato</title>
      </Helmet>
      <div className="container">
        <div className="contato__item">
          <a
            href="https://www.facebook.com/filipe.gomes.14019"
            target="_blank"
            rel="
              noopener
              noreferrer"
          >
            <img src={icon1} alt="Icone do Facebook" />
            <span>Facebook</span>
            <p>Visitar</p>
          </a>
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
      </div>
    </section>
  );
};

export default Contato;
