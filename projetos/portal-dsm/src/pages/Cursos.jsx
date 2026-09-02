import Card from "../components/Card";

function Cursos() {
  const cursos = [
    {
      titulo: "Banco de Dados",
      descricao:
        "Aprenda modelagem de dados, SQL, relacionamentos e gerenciamento de bancos de dados.",
      categoria: "Tecnologia",
      nivel: "Intermediário",
      carga: "80 horas",
      progresso: 72,
      cor: "blue",
      icone: "▣",
    },
    {
      titulo: "Desenvolvimento Web",
      descricao:
        "Crie aplicações web modernas utilizando HTML, CSS, JavaScript e frameworks.",
      categoria: "Desenvolvimento",
      nivel: "Intermediário",
      carga: "100 horas",
      progresso: 48,
      cor: "purple",
      icone: "◈",
    },
    {
      titulo: "Programação",
      descricao:
        "Desenvolva sua lógica de programação e aprenda os principais conceitos de desenvolvimento.",
      categoria: "Programação",
      nivel: "Iniciante",
      carga: "60 horas",
      progresso: 90,
      cor: "green",
      icone: "</>",
    },
  ];

  return (
    <main className="cursos-page">
      {/* CABEÇALHO */}
      <section className="cursos-header">
        <div>
          <span className="page-label">PORTAL DSM</span>

          <h1>Meus Cursos</h1>

          <p>
            Explore seus cursos, acompanhe seu progresso e
            continue sua jornada de aprendizado.
          </p>
        </div>

        <div className="course-summary">
          <span>Cursos disponíveis</span>
          <strong>12</strong>
        </div>
      </section>

      {/* RESUMO */}
      <section className="course-stats">
        <div className="course-stat">
          <span>Em andamento</span>
          <strong>03</strong>
        </div>

        <div className="course-stat">
          <span>Concluídos</span>
          <strong>05</strong>
        </div>

        <div className="course-stat">
          <span>Horas estudadas</span>
          <strong>124h</strong>
        </div>

        <div className="course-stat">
          <span>Progresso geral</span>
          <strong>68%</strong>
        </div>
      </section>

      {/* CURSOS */}
      <section className="courses-section">
        <div className="courses-section-header">
          <div>
            <span>FORMAÇÃO</span>
            <h2>Seus cursos</h2>
          </div>

          <button className="filter-button">
            Todos os cursos ▾
          </button>
        </div>

        <div className="courses-grid">
          {cursos.map((curso, index) => (
            <article className="course-card" key={index}>
              <div className={`course-cover ${curso.cor}`}>
                <div className="course-icon">
                  {curso.icone}
                </div>

                <span>{curso.categoria}</span>
              </div>

              <div className="course-body">
                <div className="course-tags">
                  <span>{curso.nivel}</span>
                  <span>{curso.carga}</span>
                </div>

                <h3>{curso.titulo}</h3>

                <p>{curso.descricao}</p>

                <div className="course-progress">
                  <div className="progress-info">
                    <span>Seu progresso</span>
                    <strong>{curso.progresso}%</strong>
                  </div>

                  <div className="progress-track">
                    <div
                      className={`progress-fill ${curso.cor}`}
                      style={{
                        width: `${curso.progresso}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <button className="course-button">
                  Continuar curso →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="courses-cta">
        <div>
          <span>CONTINUE EVOLUINDO</span>
          <h2>
            Aprender hoje é construir o profissional
            que você será amanhã.
          </h2>
        </div>

        <button>Explorar cursos →</button>
      </section>
    </main>
  );
}

export default Cursos;