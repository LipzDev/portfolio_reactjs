import React from 'react';
import { Helmet } from 'react-helmet';
import './Repositorios.css';

const Repositorios = () => {
  const [item, setItem] = React.useState(null);
  const [topRepositories, setTopRepositories] = React.useState(null);

  React.useEffect(() => {
    async function ApiRequest() {
      const response = await fetch(
        `https://api.github.com/users/LipzDev/repos?page=1&per_page=9`,
      );
      const json = await response.json();
      setItem(json);
    }
    ApiRequest();
  }, []);

  React.useEffect(() => {
    const getTopRepositories =
      item &&
      item.sort((first, second) =>
        first.created_at < second.created_at ? 1 : -1,
      );
    setTopRepositories(getTopRepositories);
  }, [item]);

  return (
    <section className="repositorios  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página de repositórios do github." />
        <title>Repositórios</title>
      </Helmet>
      <div className="container-w2">
        <div className="repositorios__item">
          {topRepositories &&
            topRepositories.map((repo) => (
              <div className="repositorios__box" key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url}>Visitar</a>
                <p>Criado em {repo.created_at}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Repositorios;
