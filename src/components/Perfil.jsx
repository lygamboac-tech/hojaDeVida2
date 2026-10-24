function Perfil() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#perfil">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            Mi Hoja de Vida
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuPrincipal">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#perfil">Perfil</a></li>
              <li className="nav-item"><a className="nav-link" href="#titulos">Títulos</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="perfil" className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
              <img
                src="https://i.pravatar.cc/300?img=12"
                alt="Foto de perfil"
                className="img-fluid rounded-circle border border-5 border-primary shadow"
                width="250"
                height="250"
              />
            </div>

            <div className="col-12 col-md-8">
              <h1 className="display-5 fw-bold text-primary">Carlos Andrés Pérez</h1>
              <h2 className="h4 text-muted">Ingeniero de Sistemas · Desarrollador Frontend</h2>

              <p className="lead mt-3">
                Apasionado por la tecnología y el desarrollo web. Con experiencia en
                React, JavaScript y diseño de interfaces responsivas. Siempre dispuesto
                a aprender y a trabajar en equipo.
              </p>

              <p className="d-flex align-items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-danger" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                Ocaña, Norte de Santander, Colombia
              </p>

              <span className="badge bg-primary me-2">React</span>
              <span className="badge bg-success me-2">JavaScript</span>
              <span className="badge bg-warning text-dark me-2">Bootstrap</span>
              <span className="badge bg-danger">Node.js</span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Perfil;
