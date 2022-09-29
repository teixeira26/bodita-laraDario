import './redSocial.css';
import Button from "../Buttons/Button";

const RedSocial=()=>{
    
    return(
        <section>
            <div className="redSocialContainer">
            <img src="./assets/icono-instagram.svg" alt="" />
            <h4>#FLORCHUYMARIDO</h4>
            <p>"¡Preparate para nuestro gran día!"
            <br/>
            "Etiquetanos en Instagram con nuestro hashtag en tus fotos, reels o videos."</p>
            <Button template='verde' texto='VER HASHTAG' url=''></Button>
            </div>
        </section>
    )

}

export default RedSocial;