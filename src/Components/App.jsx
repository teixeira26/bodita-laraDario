import Bienvenido from './Bienvenido/Bienvenido.jsx'
import Portada from './Portada/Portada.jsx'
import CardMapa from './CardMapa/CardMapa.jsx';
import Galeria from './Galeria/Galeria.jsx';
import Regalos from './Regalos/Regalos.jsx';
import RedSocial from './RedSocial/RedSocial.jsx';
import ConfirmarAsistencia from './ConfirmarAsistencia/ConfirmarAsistencia'
import DressCode from './DressCode/DressCode.jsx';
import Canciones from './Canciones/Canciones.jsx';
import Gracias from './Gracias/Gracias.jsx';
import Footer from './Footer/Footer.jsx';
import './app.css'
import StopWatch from './CuentaRegresiva/StopWatch.jsx';

function App() {
  const ceremonia = {
    iconoIglesia: './assets/icono-ceremonia.svg',
    tituloCeremonia: 'CIVIL',
    textoCeremonial1: `20 de Octubre a las 9:00 hs en el Registro Civil.`,
    textoCeremonial2: 'Av. Independencia 2846, Mar del Plata.',
    textoCeremonial3: 'Recibí debajo las indicaciones para llegar.',
    textoButton: 'LLEGAR AL CIVIL',
    urlButton: 'https://goo.gl/maps/ei3hqvECDrfj1ZHQ8'
  }

  const fiesta = {
    iconoIglesia: './assets/icono-fiesta.svg',
    titulofiesta: 'FIESTA',
    textofiestal1: '12 de Noviembre a las 16:00 hs.',
    textofiestal2: 'Garcia Lorca 232, esquina Serrano, Mar del plata.',
    textofiestal3: '¡Te esperamos!',
    textoButton: 'LLEGAR A LA FIESTA',
    urlButton: 'https://goo.gl/maps/JnzbNS2VktVutPG79'
  }

  return (
    <div className="App">
      <Portada></Portada>
      <Bienvenido></Bienvenido>
      <StopWatch></StopWatch>
      <section className='iconos'>
        <CardMapa icono={ceremonia.iconoIglesia} urlButton={ceremonia.urlButton} titulo={ceremonia.tituloCeremonia} textol1={ceremonia.textoCeremonial1} textol2={ceremonia.textoCeremonial2} textol3={ceremonia.textoCeremonial3} textoButton={ceremonia.textoButton}></CardMapa>
        <CardMapa icono={fiesta.iconoIglesia} urlButton={fiesta.urlButton} titulo={fiesta.titulofiesta} textol1={fiesta.textofiestal1} textol2={fiesta.textofiestal2} textol3={fiesta.textofiestal3} textoButton={fiesta.textoButton}></CardMapa>
      </section>
      <Galeria></Galeria>
      <Regalos></Regalos>
      <ConfirmarAsistencia></ConfirmarAsistencia>
      <DressCode></DressCode>
      <RedSocial></RedSocial>
      <Canciones></Canciones>
      <Gracias></Gracias>
      <Footer></Footer>
    </div>
  );
}

export default App;
