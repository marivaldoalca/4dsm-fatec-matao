function Sobre() {
  const valores = [
    {
      numero: "01",
      titulo: "Inovação",
      descricao:
        "Buscamos novas ideias e tecnologias para melhorar continuamente nossas soluções.",
    },
    {
      numero: "02",
      titulo: "Excelência",
      descricao:
        "Valorizamos qualidade, organização e comprometimento em cada etapa do trabalho.",
    },
    {
      numero: "03",
      titulo: "Colaboração",
      descricao:
        "Acreditamos que pessoas conectadas constroem resultados melhores.",
    },
  ];

  return (
    <main className="sobre-page">
      {/* HERO */}
      <section className="sobre-hero">
        <div className="sobre-hero-content">
          <span className="page-label">SOBRE O PORTAL DSM</span>

          <h1>
            Tecnologia que conecta
            <br />
            pessoas e conhecimento.
          </h1>

          <p>
            O Portal DSM é um ambiente desenvolvido para centralizar
            informações, ferramentas e recursos acadêmicos em uma
            experiência simples, moderna e eficiente.
          </p>
        </div>

        <div className="about-highlight">
          <span>DSM</span>
          <strong>Educação, tecnologia e inovação.</strong>
          <p>
            Um ambiente pensado para apoiar alunos,
            professores e toda a comunidade acadêmica.
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section className="about-intro">
        <div className="about-title">
          <span>QUEM SOMOS</span>
          <h2>
            Um portal criado para tornar
            a experiência acadêmica melhor.
          </h2>
        </div>

        <div className="about-text">
          <p>
            O Portal DSM reúne em um único ambiente as principais
            informações relacionadas à vida acadêmica. Nosso objetivo
            é facilitar o acesso aos conteúdos e tornar os processos
            mais organizados e acessíveis.
          </p>

          <p>
            A plataforma foi pensada com foco em usabilidade,
            organização e tecnologia, proporcionando uma experiência
            eficiente tanto para alunos quanto para professores e
            administradores.
          </p>
        </div>
      </section>

      {/* MISSÃO / VISÃO */}
      <section className="mission-section">
        <article className="mission-card dark">
          <span>01 — MISSÃO</span>
          <h3>
            Facilitar o acesso à informação e ao conhecimento.
          </h3>
          <p>
            Criar ferramentas que simplifiquem a rotina acadêmica
            e contribuam para uma experiência de aprendizagem mais
            eficiente.
          </p>
        </article>

        <article className="mission-card light">
          <span>02 — VISÃO</span>
          <h3>
            Ser um ambiente acadêmico cada vez mais conectado.
          </h3>
          <p>
            Evoluir continuamente por meio da tecnologia,
            aproximando pessoas, informações e oportunidades.
          </p>
        </article>
      </section>

      {/* VALORES */}
      <section className="values-section">
        <div className="values-header">
          <span>NOSSOS VALORES</span>
          <h2>Princípios que orientam o nosso trabalho.</h2>
        </div>

        <div className="values-grid">
          {valores.map((valor) => (
            <article className="value-card" key={valor.numero}>
              <span className="value-number">{valor.numero}</span>

              <h3>{valor.titulo}</h3>

              <p>{valor.descricao}</p>
            </article>
          ))}
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="about-numbers">
        <div>
          <strong>1.248+</strong>
          <span>Alunos</span>
        </div>

        <div>
          <strong>12</strong>
          <span>Cursos</span>
        </div>

        <div>
          <strong>50+</strong>
          <span>Profissionais</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Acesso ao portal</span>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <span>PORTAL DSM</span>
          <h2>
            Conhecimento transforma.
            Tecnologia conecta.
          </h2>
        </div>

        <button>Voltar para o início →</button>
      </section>
    </main>
  );
}

export default Sobre;