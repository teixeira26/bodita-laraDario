import Button from "../Buttons/Button";
import './confirmarAsistencia.css'

const ConfirmarAsistencia =()=>{
    return(
        <section>
            <div className="asistenciaContainer">
            <h4>CONFIRMACIÓN DE ASISTENCIA</h4>
            <p>Esperamos que seas parte de este gran día para nosotros.</p>
            <Button template='verde' texto='CONFIRMAR ASISTENCIA' url=''></Button>
            </div>
        </section>
    )
}

export default ConfirmarAsistencia;