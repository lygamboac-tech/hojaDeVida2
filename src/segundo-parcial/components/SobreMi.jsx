function SobreMi() {
  return (
    <section id="sobre-mi" className="py-5 bg-white" style={{ scrollMarginTop: '70px' }}>
      <div className="container">
        <h2 className="text-center mb-5 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-person-lines-fill text-primary"></i>
          Sobre mí
        </h2>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-top border-5 border-primary">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="bi bi-person-fill me-2"></i>Descripción
                </h5>
                <p className="card-text">
                  Ingeniero de Sistemas con enfoque en desarrollo frontend. Disfruto
                  crear interfaces claras, accesibles y adaptables a cualquier dispositivo.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-top border-5 border-success">
              <div className="card-body">
                <h5 className="card-title text-success">
                  <i className="bi bi-bullseye me-2"></i>Objetivos
                </h5>
                <ul className="mb-0">
                  <li>Trabajar en proyectos web de impacto.</li>
                  <li>Crecer como desarrollador full stack.</li>
                  <li>Liderar equipos de desarrollo.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-top border-5 border-warning">
              <div className="card-body">
                <h5 className="card-title text-warning">
                  <i className="bi bi-heart-fill me-2"></i>Intereses
                </h5>
                <ul className="mb-0">
                  <li>Inteligencia artificial</li>
                  <li>Diseño de interfaces</li>
                  <li>Código abierto</li>
                  <li>Videojuegos y música</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-top border-5 border-danger">
              <div className="card-body">
                <h5 className="card-title text-danger">
                  <i className="bi bi-star-fill me-2"></i>Fortalezas
                </h5>
                <ul className="mb-0">
                  <li>Trabajo en equipo</li>
                  <li>Aprendizaje rápido</li>
                  <li>Responsabilidad</li>
                  <li>Resolución de problemas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;