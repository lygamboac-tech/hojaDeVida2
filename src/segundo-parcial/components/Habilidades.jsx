const tecnicas = [
  { id: 1, nombre: 'React', nivel: 85, color: 'primary' },
  { id: 2, nombre: 'JavaScript', nivel: 90, color: 'warning' },
  { id: 3, nombre: 'Bootstrap', nivel: 80, color: 'success' },
  { id: 4, nombre: 'Node.js', nivel: 65, color: 'danger' },
  { id: 5, nombre: 'Git y GitHub', nivel: 75, color: 'primary' },
];

const blandas = [
  { id: 1, nombre: 'Gestión de proyectos', color: 'primary' },
  { id: 2, nombre: 'Resolución de problemas', color: 'success' },
  { id: 3, nombre: 'Comunicación efectiva', color: 'danger' },
  { id: 4, nombre: 'Adaptabilidad', color: 'warning' },
  { id: 5, nombre: 'Trabajo en equipo', color: 'primary' },
  { id: 6, nombre: 'Puntualidad', color: 'success' },
];

function Habilidades() {
  return (
    <section id="habilidades" className="hv-seccion">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="hv-titulo">
              <span className="hv-icono"><i className="bi bi-gear-fill"></i></span>
              <h2>Habilidades</h2>
            </div>

            <h5 className="mb-3">Técnicas</h5>
            {tecnicas.map((h) => (
              <div key={h.id} className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>{h.nombre}</span>
                  <span className="text-muted">{h.nivel}%</span>
                </div>
                <div className="progress" role="progressbar" aria-valuenow={h.nivel} aria-valuemin="0" aria-valuemax="100">
                  <div className={`progress-bar bg-${h.color}`} style={{ width: `${h.nivel}%` }}></div>
                </div>
              </div>
            ))}

            <h5 className="mt-4 mb-3">Blandas</h5>
            <div className="d-flex flex-wrap gap-2">
              {blandas.map((h) => (
                <span
                  key={h.id}
                  className={`badge rounded-pill fs-6 bg-${h.color} ${h.color === 'warning' ? 'text-dark' : ''}`}
                >
                  {h.nombre}
                </span>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="hv-panel h-100">
              <h3><i className="bi bi-globe me-2"></i>Idiomas</h3>
              <div className="d-flex justify-content-between">
                <span>Inglés B2</span>
                <span className="text-muted">65%</span>
              </div>
              <div className="progress mb-4" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-danger" style={{ width: '65%' }}></div>
              </div>

              <h3><i className="bi bi-people-fill me-2"></i>Referencias</h3>
              <p className="mb-3">
                <strong>Camila Torres Mejía</strong><br />
                <small>Líder de Desarrollo · TechSoluciones<br />Cel. 310 000 0001</small>
              </p>
              <p className="mb-0">
                <strong>Mariana Cardona García</strong><br />
                <small>Administradora de Negocios Internacionales<br />Cel. 310 000 0002</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;