import React from "react";
import { Helmet } from "react-helmet";
import Next from "../Next-page/Next";
import { getGithubRepository } from "../../Services/request/repo";
import "./Repositorios.css";

const Repositorios = () => {
  const [item, setItem] = React.useState(null);
  const [topRepositories, setTopRepositories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getGithubRepository()
      .then((repo) => {
        setLoading(false);
        setItem(repo?.data);
      })
      .catch((error) => {
        setLoading(true);
        console.error(error);
      });
  }, []);

  React.useEffect(() => {
    const getTopRepositories = () => {
      if (!item) return [];

      const filteredRepos = item
        .filter((repo) => !repo.fork)
        .sort(
          (first, second) =>
            new Date(second.created_at) - new Date(first.created_at)
        );

      // Verifica a largura da tela para determinar quantos cards exibir
      const screenWidth = window.innerWidth;
      const maxCards = screenWidth >= 1600 ? 6 : 4;

      return filteredRepos.slice(0, maxCards);
    };

    setTopRepositories(getTopRepositories());
  }, [item]);

  // Adiciona listener para redimensionamento da janela
  React.useEffect(() => {
    const handleResize = () => {
      if (!item) return;

      const filteredRepos = item
        .filter((repo) => !repo.fork)
        .sort(
          (first, second) =>
            new Date(second.created_at) - new Date(first.created_at)
        );

      const screenWidth = window.innerWidth;
      const maxCards = screenWidth >= 1600 ? 6 : 4;

      setTopRepositories(filteredRepos.slice(0, maxCards));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [item]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5",
      Java: "#b07219",
      React: "#61dafb",
      Vue: "#42b883",
      "Node.js": "#339933",
      PHP: "#4F5D95",
      Ruby: "#701516",
      Go: "#00ADD8",
      Rust: "#dea584",
      "C++": "#f34b7d",
      "C#": "#178600",
      Swift: "#ffac45",
      Kotlin: "#F18E33",
      Dart: "#00B4AB",
      Scala: "#c22d40",
      R: "#198CE7",
    };
    return colors[language] || "#6e7681";
  };

  if (loading) {
    return (
      <section className="repositorios efeito__transicao">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Repositórios GitHub de Filipe Gomes"
          />
        </Helmet>
        <div className="container-w2">
          <div className="loading">
            <h1>Carregando repositórios...</h1>
            <p>Buscando projetos no GitHub</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="repositorios efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Repositórios GitHub de Filipe Gomes - Desenvolvedor Front-End"
        />
      </Helmet>
      <div className="container-w2">
        <h1>Repositórios GitHub</h1>
        <p className="repositorios__description">
          Confira meus projetos e códigos no GitHub. Cada repositório representa
          uma oportunidade de aprendizado e demonstra minha evolução como
          desenvolvedor.
        </p>
        <div className="repositorios__item">
          {topRepositories?.length > 0 ? (
            topRepositories.map((repo) => (
              <div className="repositorios__box" key={repo.id}>
                <div className="repo__name">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                  <p>
                    {repo.description
                      ? repo.description
                      : "Projeto em desenvolvimento..."}
                  </p>
                </div>
                <div className="repo__stats">
                  <div className="stats__content">
                    {repo.language && (
                      <p
                        style={{
                          borderLeft: `3px solid ${getLanguageColor(
                            repo.language
                          )}`,
                        }}
                      >
                        {repo.language}
                      </p>
                    )}
                    <span>⭐ {repo.stargazers_count} stars</span>
                    <span>📅 {formatDate(repo.created_at)}</span>
                    {repo.updated_at && (
                      <span>🔄 {formatDate(repo.updated_at)}</span>
                    )}
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver código
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <h2>Nenhum repositório encontrado</h2>
              <p>Parece que ainda não há repositórios públicos disponíveis.</p>
            </div>
          )}
        </div>
        <div className="next-section-repo">
          {!loading && topRepositories?.length > 0 && <Next route="/contato" />}
        </div>
      </div>
    </section>
  );
};

export default Repositorios;
