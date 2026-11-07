const titulos = [
  { id: 1, titulo: 'Ingeniera de Sistemas', institucion: 'Universidad Francisco de Paula Santander', anio: '2022', color: 'primary', estado: 'Graduada' },
  { id: 2, titulo: 'Especialización en Desarrollo Web', institucion: 'Universidad Nacional Abierta', anio: '2024', color: 'success', estado: 'Completado' },
  { id: 3, titulo: 'Certificación en React Avanzado', institucion: 'Plataforma Online de Cursos', anio: '2025', color: 'warning', estado: 'En curso' },
  { id: 4, titulo: 'Maestría en Inteligencia Artificial', institucion: 'Universidad Internacional', anio: '2027', color: 'danger', estado: 'Pendiente' },
];

const adicional = [
  'Excel: Power Query para principiantes',
  'Aprende análisis de datos',
  'Aprende Cloud Computing para IT',
  'Despliegue de aplicaciones con Docker',
  'Fundamentos del Desarrollo Web: Full Stack',
  'Scrum esencial',
  'Fundamentos de la ciberseguridad',
];

function Formacion() {
  return (
    <section id="formacion" className="hv-seccion hv-seccion-alt">
      <div className="container">
        <div className="hv-titulo">
          <span className="hv-icono"><i className="bi bi-mortarboard-fill"></i></span>
          <h2>Formación</h2>
        </div>

        <div className="row g-4 mb-5">
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

        <div className="hv-titulo">
          <span className="hv-icono"><i className="bi bi-laptop"></i></span>
          <h2>Formación adicional</h2>
        </div>
        <div className="row g-2">
          {adicional.map((curso, i) => (
            <div key={i} className="col-12 col-md-6">
              <i className="bi bi-check-circle-fill text-success me-2"></i>{curso}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formacion;