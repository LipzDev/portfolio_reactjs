import React from 'react';
import { Helmet } from 'react-helmet';
import Next from '../Next-page/Next';
import './Repositorios.css';

const Repositorios = () => {
  const [item, setItem] = React.useState(null);
  const [topRepositories, setTopRepositories] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function ApiRequest() {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/LipzDev/repos?per_page=12&page=2`,
      );
      const json = await response.json();
      setLoading(false);
      setItem(json);
    }
    ApiRequest();
  }, []);

  React.useEffect(() => {
    const getTopRepositories =
      item &&
      !item.fork &&
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
        <script
          src="https://kit.fontawesome.com/e6b1f34d6c.js"
          crossorigin="anonymous"
        ></script>
        <title>Repositórios</title>
      </Helmet>
      <div className="container-w2">
        {loading === true ? (
          <h1>Carregando...</h1>
        ) : (
          <h1>Repositórios recentes</h1>
        )}
        <div className="repositorios__item">
          {topRepositories &&
            topRepositories.map((repo) => (
              <div className="repositorios__box" key={repo.id}>
                <div className="repo__name">
                  <a href={repo.html_url}>
                    <i className="fas fa-book"></i>
                    {repo.name}
                  </a>
                  <p>{repo.description}</p>
                  <div className="repo__stats">
                    <div className="stats__content">
                      <p>{repo.language}</p>
                      <span>
                        <i className="far fa-star"></i>
                        {repo.stargazers_count}
                      </span>
                    </div>
                    <a href={repo.html_url}>Visitar</a>
                  </div>
                </div>
              </div>
            ))}
          <div className="next-section-repo">
            <Next route="/contato" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repositorios;
