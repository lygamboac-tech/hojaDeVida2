const titulos = [
  { id: 1, titulo: 'Ingeniero de Sistemas', institucion: 'Universidad Francisco de Paula Santander', anio: '2022', color: 'primary', estado: 'Graduado' },
  { id: 2, titulo: 'Especialización en Desarrollo Web', institucion: 'Universidad Nacional Abierta', anio: '2024', color: 'success', estado: 'Completado' },
  { id: 3, titulo: 'Certificación en React Avanzado', institucion: 'Plataforma Online de Cursos', anio: '2025', color: 'warning', estado: 'En curso' },
  { id: 4, titulo: 'Maestría en Inteligencia Artificial', institucion: 'Universidad Internacional', anio: '2027', color: 'danger', estado: 'Pendiente' },
];

function Formacion() {
  return (
    <section id="formacion" className="py-5 bg-light" style={{ scrollMarginTop: '70px' }}>
      <div className="container">
        <h2 className="text-center mb-5 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-mortarboard-fill text-primary"></i>
          Formación Académica
        </h2>

        <div className="row g-4">
          {titulos.map((t) => (
            <div key={t.id} className="col-12 col-md-6">
              <div className={`card h-100 shadow-sm border-start border-5 border-${t.color}`}>
                <div className="card-body">
                  <span className={`badge bg-${t.color} ${t.color === 'warning' ? 'text-dark' : ''} mb-2`}>
                    {t.estado}
                  </span>
                  <h5 className="card-title">{t.titulo}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{t.institucion}</h6>
                  <p className="card-text mb-0">
                    <i className="bi bi-calendar-event me-1"></i>Año: {t.anio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formacion;