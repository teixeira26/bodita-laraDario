import Button from "../Buttons/Button";
import './canciones.css'

const Canciones =()=>{
    return(
        <section>
            <div className="asistenciaContainer">
            <h4>¿QUÉ CANCIONES NO PUEDEN FALTAR?</h4>
            <p>¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!</p>
            <Button template='verde' texto='SUGERIR CANCIÓN' url='https://docs.google.com/forms/d/e/1FAIpQLSfWFt_e66L9vBQa6JcUCa6h0il9nrNOiYuATXuGOwd-Lz9Mwg/viewform?usp=sf_link'></Button>
            </div>
        </section>
    )
}

export default Canciones;