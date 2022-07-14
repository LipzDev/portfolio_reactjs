import React from 'react';
import { Helmet } from 'react-helmet';
import Next from '../Next-page/Next';
import {getGithubRepository} from '../../Services/request/repo'
import './Repositorios.css';

const Repositorios = () => {
  const [item, setItem] = React.useState(null);
  const [topRepositories, setTopRepositories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getGithubRepository().then((repo) => {      
      setLoading(false);
      setItem(repo?.data);
    }).catch((error) => {
      setLoading(true);
      console.error(error);
    })
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
      </Helmet>
      {loading ? <h1>Carregando...</h1> : (
        <div className="container-w2">
        <h1>Repositórios recentes</h1>
        <div className="repositorios__item">
          {topRepositories?.map((repo) => (
            <div className="repositorios__box" key={repo.id}>
              <div className="repo__name">
                <a href={repo.html_url}>
                  {repo.name}
                </a>
                <p>{repo.description ? repo.description : 'Sem descrição...'}</p>
                <div className="repo__stats">
                  <div className="stats__content">
                    <p>Tecnologia: {repo.language}</p>
                    <span>
                      Stars: {repo.stargazers_count}
                    </span>
                  </div>
                  <a href={repo.html_url}>Visitar</a>
                </div>
              </div>
            </div>
          ))}
          <div className="next-section-repo">
            {!loading && <Next route="/contato" />}            
          </div>
        </div>
      </div>
      )}
    </section>
  );
};

export default Repositorios;
