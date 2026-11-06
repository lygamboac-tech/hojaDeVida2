function Perfil() {
  return (
    <section id="perfil" className="bg-light py-5" style={{ scrollMarginTop: '70px' }}>
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

            <p className="mb-1 d-flex align-items-center gap-2">
              <i className="bi bi-geo-alt-fill text-danger"></i>
              Ocaña, Norte de Santander, Colombia
            </p>
            <p className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill text-primary"></i>
              carlos.perez@ejemplo.com
            </p>

            <div className="mb-3">
              <span className="badge bg-primary me-2">React</span>
              <span className="badge bg-success me-2">JavaScript</span>
              <span className="badge bg-warning text-dark me-2">Bootstrap</span>
              <span className="badge bg-danger">Node.js</span>
            </div>

            <a href="mailto:carlos.perez@ejemplo.com" className="btn btn-primary me-2">
              <i className="bi bi-send-fill me-1"></i> Contáctame
            </a>
            <a href="#formacion" className="btn btn-outline-success">
              <i className="bi bi-mortarboard-fill me-1"></i> Ver formación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;