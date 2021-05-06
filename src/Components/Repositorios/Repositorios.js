import React from 'react';
import { Helmet } from 'react-helmet';
import './Repositorios.css';

const Repositorios = () => {
  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    async function ApiRequest() {
      const response = await fetch(
        `https://api.github.com/users/LipzDev/repos`,
      );
      const json = await response.json();
      setItem(json);
    }
    ApiRequest();
  }, []);

  return (
    <section className="repositorios  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página de repositórios do github." />
        <title>Repositórios</title>
      </Helmet>
      <div className="container-w2">
        <div className="repositorios__item">
          {item &&
            item.map(
              (item, index, arr) =>
                index >=
                  20 /*NECESSÁRIO CRIAR UMA LOGICA PARA EXIBIR APENAS OS ITENS RECENTES */ &&
                !item.fork && (
                  <div className="repositorios__box" key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href={item.html_url}>Visitar</a>
                    {(arr, index)}
                  </div>
                ),
            )}
        </div>
      </div>
    </section>
  );
};

export default Repositorios;
