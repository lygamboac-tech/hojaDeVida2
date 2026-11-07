function SobreMi() {
  return (
    <section id="sobre-mi" className="hv-seccion">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <div className="hv-panel h-100">
              <h3>Objetivos</h3>
              <ul className="list-unstyled mb-4">
                <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>Trabajar en proyectos web de impacto.</li>
                <li className="mb-1"><i className="bi bi-check-circle-fill text-success me-2"></i>Crecer como desarrolladora full stack.</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Liderar equipos de desarrollo.</li>
              </ul>

              <h3>Intereses</h3>
              <ul className="list-unstyled mb-4">
                <li className="mb-1"><i className="bi bi-star-fill text-warning me-2"></i>Inteligencia artificial</li>
                <li className="mb-1"><i className="bi bi-star-fill text-warning me-2"></i>Diseño de interfaces</li>
                <li><i className="bi bi-star-fill text-warning me-2"></i>Código abierto</li>
              </ul>

              <h3>Fortalezas</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-1"><i className="bi bi-heart-fill text-danger me-2"></i>Trabajo en equipo</li>
                <li className="mb-1"><i className="bi bi-heart-fill text-danger me-2"></i>Aprendizaje rápido</li>
                <li><i className="bi bi-heart-fill text-danger me-2"></i>Resolución de problemas</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="hv-titulo">
              <span className="hv-icono"><i className="bi bi-person-lines-fill"></i></span>
              <h2>Sobre mí</h2>
            </div>
            <p className="lead">
              Soy una ingeniera de sistemas apasionada por crear interfaces claras,
              accesibles y adaptables a cualquier dispositivo. Me gusta trabajar en
              equipo, aprender nuevas tecnologías y convertir ideas en soluciones
              reales que mejoren la vida de las personas.
            </p>

            <div className="hv-titulo mt-5">
              <span className="hv-icono"><i className="bi bi-briefcase-fill"></i></span>
              <h2>Experiencia</h2>
            </div>
            <div className="card shadow-sm border-start border-5 border-success">
              <div className="card-body">
                <div className="d-flex flex-wrap justify-content-between">
                  <h5 className="card-title">TechSoluciones S.A.S.</h5>
                  <span className="badge bg-success align-self-start">Enero – Julio 2025</span>
                </div>
                <p className="card-text">
                  Lideré las primeras fases de un proyecto de automatización de
                  informes, utilizando SCRUM y Design Thinking.
                </p>
                <small className="text-muted">
                  Jefe inmediato: Camila Torres · Cargo: Líder de Desarrollo · Tel. 310 000 0001
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;