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


function App() {
  const ceremonia = {
    iconoIglesia:'./assets/icono-ceremonia.svg',
    tituloCeremonia:'CIVIL',
    textoCeremonial1:`11 de Junio a las 18:00 horas en la Iglesia de los Capuchinos.`,
    textoCeremonial2:'Buenos Aires 600-699, Córdoba.',
    textoCeremonial3:  'Recibí debajo las indicaciones para llegar.',
    textoButton:'LLEGAR A LA CEREMONIA',
    urlButton:'https://www.google.com/maps/place/Delegaci%C3%B3n+Registro+Provincial+de+las+Personas+-+Mar+del+Plata/@-38.0055898,-57.5767279,15z/data=!4m13!1m6!3m5!1s0x9584dea5c963e7f3:0x59d6e9e3191777ed!2sDelegaci%C3%B3n+Registro+Provincial+de+las+Personas+-+Mar+del+Plata!8m2!3d-38.0055898!4d-57.5602484!3m5!1s0x9584dea5c963e7f3:0x59d6e9e3191777ed!8m2!3d-38.0055898!4d-57.5602484!15sChxyZWdpc3RybyBjaXZpbCBpbmRlcGVuZGVuY2lhWh4iHHJlZ2lzdHJvIGNpdmlsIGluZGVwZW5kZW5jaWGSARNyZWdpc3RyYXRpb25fb2ZmaWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJSZW1VeU5tdG5SUkFC4AEA'
  }

  const fiesta ={
    iconoIglesia:'./assets/icono-fiesta.svg',
    titulofiesta:'FIESTA',
    textofiestal1:'11 de Junio a las 18:00 horas en la Iglesia de los Capuchinos.',
    textofiestal2:'Buenos Aires 600-699, Córdoba.',
    textofiestal3:  '¡Te esperamos!',
    textoButton:'LLEGAR A LA FIESTA',
    urlButton:'https://www.google.com/maps/place/Garc%C3%ADa+Lorca+234,+B7603EFF+Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.0806121,-57.5416059,17z/data=!3m1!4b1!4m5!3m4!1s0x9584e7462f48070d:0x4b5513f801c20b1d!8m2!3d-38.0806121!4d-57.5416059'
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
