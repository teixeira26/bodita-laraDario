import './redSocial.css';
import Button from "../Buttons/Button";

const RedSocial=()=>{
    
    return(
        <section>
            <div className="redSocialContainer">
            <img src="./assets/icono-instagram.svg" alt="" />
            <p>"¡Preparate para nuestro gran día!"
            <br/>
            "Te dejamos un drive para que subas todas tus fotos al otro día!"
            </p>
            <Button template='verde' texto='FOTOS' url='https://photos.app.goo.gl/m9BfpGRkrZrUpZCe6'></Button>
            </div>
        </section>
    )

}

export default RedSocial;