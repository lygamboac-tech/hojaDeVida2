const titulos = [
  { id: 1, titulo: 'Ingeniero de Sistemas', institucion: 'Universidad Francisco de Paula Santander', anio: '2022', color: 'primary', estado: 'Graduado' },
  { id: 2, titulo: 'Especialización en Desarrollo Web', institucion: 'Universidad Nacional Abierta', anio: '2024', color: 'success', estado: 'Completado' },
  { id: 3, titulo: 'Certificación en React Avanzado', institucion: 'Plataforma Online de Cursos', anio: '2025', color: 'warning', estado: 'En curso' },
  { id: 4, titulo: 'Maestría en Inteligencia Artificial', institucion: 'Universidad Internacional', anio: '2027', color: 'danger', estado: 'Pendiente' },
];

function Titulos() {
  return (
    <section id="titulos" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 d-flex justify-content-center align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
          </svg>
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
                  <p className="card-text mb-0">Año: {t.anio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Titulos;
