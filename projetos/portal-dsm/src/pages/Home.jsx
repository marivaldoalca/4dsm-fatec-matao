function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="badge">PORTAL DSM</span>

          <h1>
            Soluções inteligentes
            <br />
            para o seu negócio.
          </h1>

          <p>
            Bem-vindo ao Portal DSM. Tenha acesso a informações,
            ferramentas e recursos para tornar seu trabalho mais
            simples, rápido e eficiente.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Acessar Portal
            </button>

            <button className="btn-secondary">
              Saiba mais
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-header">
            <span className="status"></span>
            Portal DSM
          </div>

          <div className="card-content">
            <span>Ambiente corporativo</span>
            <strong>Tudo em um só lugar.</strong>
            <p>
              Centralize suas atividades e acompanhe
              as principais informações da empresa.
            </p>
          </div>

          <div className="card-footer">
            <span>DSM</span>
            <span>●●●</span>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-title">
          <span>RECURSOS</span>
          <h2>Um portal feito para facilitar seu dia.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature">
            <div className="feature-icon">01</div>
            <h3>Centralização</h3>
            <p>
              Encontre as principais ferramentas e informações
              em um único ambiente.
            </p>
          </article>

          <article className="feature">
            <div className="feature-icon">02</div>
            <h3>Produtividade</h3>
            <p>
              Simplifique processos e tenha mais agilidade
              nas suas atividades.
            </p>
          </article>

          <article className="feature">
            <div className="feature-icon">03</div>
            <h3>Segurança</h3>
            <p>
              Um ambiente corporativo pensado para oferecer
              acesso seguro às informações.
            </p>
          </article>
        </div>
      </section>

      <section className="company-banner">
        <div>
          <span>PORTAL DSM</span>
          <h2>Conectando pessoas, processos e resultados.</h2>
        </div>

        <button className="btn-light">
          Conheça o portal →
        </button>
      </section>
    </main>
  );
}

export default Home;