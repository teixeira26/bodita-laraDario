import './cardMapa.css'
import Button from '../Buttons/Button.jsx'
const CardMapa = (props)=>{
    const {icono, titulo,  textol1, textol2, textol3, textoButton, urlButton} = props;
    return(
        <div className="containerCardMapa">
            <img src={`${icono}`} alt="" draggable={false}/>
            <h4>{titulo}</h4>
            <p>{textol1}<br/>{textol2}<br/>{textol3}</p>
            <Button texto={textoButton} template='verde' url={urlButton}></Button>
            
        </div>
    )
}

export default CardMapa;