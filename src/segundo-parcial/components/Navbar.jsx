function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top hv-navbar shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#perfil">
          <i className="bi bi-person-badge-fill fs-4"></i>
          Valentina Ríos
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Mostrar menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#perfil">Perfil</a></li>
            <li className="nav-item"><a className="nav-link" href="#sobre-mi">Sobre mí</a></li>
            <li className="nav-item"><a className="nav-link" href="#formacion">Formación</a></li>
            <li className="nav-item"><a className="nav-link" href="#habilidades">Habilidades</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;