import Perfil from './components/Perfil';
import Titulos from './components/Titulos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12"><Perfil /></div>
      </div>
      <div className="row g-0">
        <div className="col-12"><Titulos /></div>
      </div>
      <div className="row g-0">
        <div className="col-12"><Footer /></div>
      </div>
    </div>
  );
}

export default App;
