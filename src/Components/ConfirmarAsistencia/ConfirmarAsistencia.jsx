import Button from "../Buttons/Button";
import './confirmarAsistencia.css'

const ConfirmarAsistencia =()=>{
    return(
        <section>
            <div className="asistenciaContainer">
            <h4>CONFIRMACIÓN DE ASISTENCIA</h4>
            <p>Esperamos que seas parte de este gran día para nosotros.</p>
            <Button template='verde' texto='CONFIRMAR ASISTENCIA' url='https://docs.google.com/forms/d/e/1FAIpQLSfWFt_e66L9vBQa6JcUCa6h0il9nrNOiYuATXuGOwd-Lz9Mwg/viewform?usp=sf_link'></Button>
            </div>
        </section>
    )
}

export default ConfirmarAsistencia;