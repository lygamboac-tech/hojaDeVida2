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
    <footer id="contacto" className="hv-footer pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mb-4">
            <h4 className="hv-footer-titulo">Contáctame</h4>
            <p>¿Te interesa mi perfil? Escríbeme y con gusto te responderé.</p>

            <p className="d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill text-warning"></i>
              valentina.rios@ejemplo.com
            </p>
            <p className="d-flex align-items-center gap-2">
              <i className="bi bi-geo-alt-fill text-danger"></i>
              Ocaña, Colombia
            </p>

            <div className="d-flex gap-3 fs-4">
              <a href="https://github.com" className="text-white" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" className="text-warning" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com" className="text-danger" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://wa.me/573100000000" className="text-success" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-7 mb-4">
            <form onSubmit={handleSubmit}>
              {enviado && (
                <div className="alert alert-success py-2">¡Mensaje enviado correctamente!</div>
              )}

              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows="3"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-success">
                <i className="bi bi-send-fill me-1"></i> Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="hv-footer-bottom text-center py-3">
        <small>© 2026 Valentina Ríos Herrera · Todos los derechos reservados</small>
      </div>
    </footer>
  );
}

export default Footer;