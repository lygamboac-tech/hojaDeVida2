const tecnicas = [
  { id: 1, nombre: 'React', nivel: 85, color: 'primary' },
  { id: 2, nombre: 'JavaScript', nivel: 90, color: 'warning' },
  { id: 3, nombre: 'Bootstrap', nivel: 80, color: 'success' },
  { id: 4, nombre: 'Node.js', nivel: 65, color: 'danger' },
  { id: 5, nombre: 'Git y GitHub', nivel: 75, color: 'primary' },
];

const blandas = [
  { id: 1, nombre: 'Trabajo en equipo', color: 'primary' },
  { id: 2, nombre: 'Comunicación', color: 'success' },
  { id: 3, nombre: 'Liderazgo', color: 'danger' },
  { id: 4, nombre: 'Adaptabilidad', color: 'warning' },
  { id: 5, nombre: 'Resolución de problemas', color: 'primary' },
  { id: 6, nombre: 'Puntualidad', color: 'success' },
];

function Habilidades() {
  return (
    <section id="habilidades" className="py-5 bg-white" style={{ scrollMarginTop: '70px' }}>
      <div className="container">
        <h2 className="text-center mb-5 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-gear-fill text-primary"></i>
          Habilidades
        </h2>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-4">
                  <i className="bi bi-code-slash text-success me-2"></i>Habilidades técnicas
                </h4>
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
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-4">
                  <i className="bi bi-people-fill text-danger me-2"></i>Habilidades blandas
                </h4>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;