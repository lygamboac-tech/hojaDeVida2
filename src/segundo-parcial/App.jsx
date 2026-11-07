import './estilos.css';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';
import SobreMi from './components/SobreMi';
import Formacion from './components/Formacion';
import Habilidades from './components/Habilidades';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12"><Navbar /></div>
      </div>
      <div className="row g-0">
        <div className="col-12"><Perfil /></div>
      </div>
      <div className="row g-0">
        <div className="col-12"><SobreMi /></div>
      </div>
      <div className="row g-0">
        <div className="col-12"><Formacion /></div>
      </div>
      <div className="row g-0">
        <div className="col-12"><Habilidades /></div>
      </div>
      <div className="row g-0">
        <div className="col-12"><Footer /></div>
      </div>
    </div>
  );
}

export default App;