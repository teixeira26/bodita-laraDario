import Bienvenido from './Bienvenido/Bienvenido.jsx'
import Portada from './Portada/Portada.jsx'
import CardMapa from './CardMapa/CardMapa.jsx';
import Galeria from './Galeria/Galeria.jsx';
import Regalos from './Regalos/Regalos.jsx';
import './app.css'

function App() {
  const ceremonia = {
    iconoIglesia:'./assets/icono-ceremonia.svg',
    tituloCeremonia:'CEREMONIA',
    textoCeremonial1:`11 de Junio a las 18:00 horas en la Iglesia de los Capuchinos.`,
    textoCeremonial2:'Buenos Aires 600-699, Córdoba.',
    textoCeremonial3:  'Recibí debajo las indicaciones para llegar.',
    textoButton:'LLEGAR A LA CEREMONIA',
    urlButton:'#'
  }

  const fiesta ={
    iconoIglesia:'./assets/icono-fiesta.svg',
    titulofiesta:'FIESTA',
    textofiestal1:'11 de Junio a las 18:00 horas en la Iglesia de los Capuchinos.',
    textofiestal2:'Buenos Aires 600-699, Córdoba.',
    textofiestal3:  '¡Te esperamos!',
    textoButton:'LLEGAR A LA FIESTA',
    urlButton:'#'
  }

  return (
    <div className="App">
      <Portada></Portada>
      <Bienvenido></Bienvenido>
      <section className='iconos'>
        <CardMapa icono={ceremonia.iconoIglesia} urlButton={ceremonia.urlButton} titulo={ceremonia.tituloCeremonia} textol1={ceremonia.textoCeremonial1} textol2={ceremonia.textoCeremonial2} textol3={ceremonia.textoCeremonial3} textoButton={ceremonia.textoButton}></CardMapa>
        <CardMapa icono={fiesta.iconoIglesia} urlButton={fiesta.urlButton} titulo={fiesta.titulofiesta} textol1={fiesta.textofiestal1} textol2={fiesta.textofiestal2} textol3={fiesta.textofiestal3} textoButton={fiesta.textoButton}></CardMapa>
      </section>
      <Galeria></Galeria>
      <Regalos></Regalos>
    </div>
  );
}

export default App;
