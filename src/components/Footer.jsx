import { useState } from 'react';

function Footer() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', form);
    setEnviado(true);
    setForm({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <footer id="contacto" className="bg-dark text-white pt-5 border-top border-danger border-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mb-4">
            <h4 className="text-warning">Contáctame</h4>
            <p>¿Te interesa mi perfil? Escríbeme y con gusto te responderé.</p>
            <p className="d-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              carlos.perez@ejemplo.com
            </p>
            <p className="d-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-danger" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              Ocaña, Colombia
            </p>
          </div>

          <div className="col-12 col-md-7 mb-4">
            <form onSubmit={handleSubmit}>
              {enviado && (
                <div className="alert alert-success py-2">¡Mensaje enviado correctamente!</div>
              )}

              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="correo" name="correo" value={form.correo} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" name="mensaje" rows="3" value={form.mensaje} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn btn-success">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-black text-center py-3">
        <small>© 2026 Carlos Andrés Pérez · Todos los derechos reservados</small>
      </div>
    </footer>
  );
}

export default Footer;
