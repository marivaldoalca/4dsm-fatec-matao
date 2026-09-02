function Alunos() {
  const alunos = [
    {
      nome: "João da Silva",
      curso: "Desenvolvimento de Sistemas",
      status: "Ativo",
      progresso: 78,
    },
    {
      nome: "Maria Oliveira",
      curso: "Desenvolvimento de Sistemas",
      status: "Ativo",
      progresso: 92,
    },
    {
      nome: "Carlos Santos",
      curso: "Desenvolvimento de Sistemas",
      status: "Pendente",
      progresso: 54,
    },
  ];

  return (
    <main className="alunos-page">
      {/* CABEÇALHO */}
      <section className="page-header">
        <div>
          <span className="page-label">PORTAL DSM</span>
          <h1>Alunos</h1>
          <p>
            Gerencie alunos, acompanhe o desempenho e consulte
            informações acadêmicas.
          </p>
        </div>

        <button className="btn-primary">
          + Novo aluno
        </button>
      </section>

      {/* INDICADORES */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">👥</div>
          <div>
            <span>Total de alunos</span>
            <strong>1.248</strong>
            <small>+12% este semestre</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">✓</div>
          <div>
            <span>Alunos ativos</span>
            <strong>1.087</strong>
            <small>87% do total</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">◷</div>
          <div>
            <span>Pendências</span>
            <strong>86</strong>
            <small>Requer atenção</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">★</div>
          <div>
            <span>Desempenho médio</span>
            <strong>8,7</strong>
            <small>+0,4 este semestre</small>
          </div>
        </div>
      </section>

      {/* LISTAGEM */}
      <section className="students-section">
        <div className="section-heading">
          <div>
            <span>GESTÃO ACADÊMICA</span>
            <h2>Alunos cadastrados</h2>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Buscar aluno..."
            />
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Curso</th>
                <th>Status</th>
                <th>Progresso</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {alunos.map((aluno, index) => (
                <tr key={index}>
                  <td>
                    <div className="student-info">
                      <div className="avatar">
                        {aluno.nome.charAt(0)}
                      </div>

                      <div>
                        <strong>{aluno.nome}</strong>
                        <span>Aluno DSM #{1000 + index}</span>
                      </div>
                    </div>
                  </td>

                  <td>{aluno.curso}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        aluno.status === "Ativo"
                          ? "active"
                          : "pending"
                      }`}
                    >
                      <i></i>
                      {aluno.status}
                    </span>
                  </td>

                  <td>
                    <div className="progress-wrapper">
                      <div className="progress-bar">
                        <div
                          style={{
                            width: `${aluno.progresso}%`,
                          }}
                        ></div>
                      </div>

                      <span>{aluno.progresso}%</span>
                    </div>
                  </td>

                  <td>
                    <button className="action-button">
                      Ver detalhes →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Mostrando 3 de 1.248 alunos</span>

          <div className="pagination">
            <button>‹</button>
            <button className="current">1</button>
            <button>2</button>
            <button>3</button>
            <button>›</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Alunos;