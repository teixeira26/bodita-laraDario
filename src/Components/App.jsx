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
    textoCeremonial2: 'Av. Falsa 123, lorem lorem.',
    textoCeremonial3: 'Recibí debajo las indicaciones para llegar.',
    textoButton: 'LLEGAR AL CIVIL',
    urlButton: 'https://www.google.com.ar/maps/place/La+Casita+Loca/@34.6705515,-77.3440518,17z/data=!3m1!4b1!4m5!3m4!1s0x89a905b0579add6d:0x7e2abd40eefb0d04!8m2!3d34.6705471!4d-77.3418631'
  }

  const fiesta = {
    iconoIglesia: './assets/icono-fiesta.svg',
    titulofiesta: 'FIESTA',
    textofiestal1: '12 de Noviembre a las 16:00 hs.',
    textofiestal2: 'falso 12221, lorem, ipsum lorem.',
    textofiestal3: '¡Te esperamos!',
    textoButton: 'LLEGAR A LA FIESTA', 
    urlButton: 'https://www.google.com.ar/maps/place/La+Casita+Loca/@34.6705515,-77.3440518,17z/data=!3m1!4b1!4m5!3m4!1s0x89a905b0579add6d:0x7e2abd40eefb0d04!8m2!3d34.6705471!4d-77.3418631'
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
