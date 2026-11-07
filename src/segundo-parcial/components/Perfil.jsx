function Perfil() {
  return (
    <section id="perfil" className="hv-banner">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-4 text-center">
            <img
              src="https://i.pravatar.cc/300?img=47"
              alt="Foto de perfil"
              className="hv-foto"
            />
          </div>

          <div className="col-12 col-md-8">
            <h1 className="hv-nombre display-5">Valentina Ríos Herrera</h1>
            <h2 className="hv-cargo">Ingeniera de Sistemas</h2>

            <p className="mt-3">
              Ingeniera de Sistemas recién graduada, con experiencia en desarrollo
              frontend y gestión de datos. Capaz de trabajar en equipos
              multidisciplinarios, resolver problemas técnicos y adaptarme a nuevas
              tecnologías. Comprometida con el aprendizaje continuo y en busca de
              oportunidades para aplicar y expandir mis habilidades.
            </p>

            <p className="mb-1 d-flex align-items-center gap-2">
              <i className="bi bi-geo-alt-fill text-danger"></i>
              Ocaña, Norte de Santander, Colombia
            </p>
            <p className="mb-1 d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill text-primary"></i>
              valentina.rios@ejemplo.com
            </p>
            <p className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-telephone-fill text-success"></i>
              (57) 310 000 0000
            </p>

            <div className="mb-3">
              <span className="badge bg-primary me-2">React</span>
              <span className="badge bg-success me-2">JavaScript</span>
              <span className="badge bg-warning text-dark me-2">Bootstrap</span>
              <span className="badge bg-danger">Node.js</span>
            </div>

            <a href="mailto:valentina.rios@ejemplo.com" className="btn btn-vino me-2 mb-2">
              <i className="bi bi-send-fill me-1"></i> Contáctame
            </a>
            <a href="#formacion" className="btn btn-outline-vino mb-2">
              <i className="bi bi-mortarboard-fill me-1"></i> Ver formación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;