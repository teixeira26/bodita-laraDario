import './redSocial.css';
import Button from "../Buttons/Button";
import { useEffect, useRef } from 'react';

const RedSocial=()=>{
    const redSocial = useRef()
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            let posicionScrollY = window.pageYOffset;
            // console.log(posicionScrollY);
            redSocial.current.style.backgroundPositionY = redSocial.current.getBoundingClientRect().top<0? -(redSocial.current.getBoundingClientRect().top) *0.3+"px":-((redSocial.current.getBoundingClientRect().top) *0.3)+"px"
        })
    },[])
    return(
        <section>
            <div className="redSocialContainer">
            <img src="./assets/icono-instagram.svg" alt="" />
            <p> #Flopi&Luqui
            <br/>
            ¡Preparate para nuestro gran día!
            <br/>
            Etiquetanos en Instagram con nuestro hashtag en tus fotos, reels o videos.
            <br/><br/>
            Te dejamos un drive para que subas todas tus fotos al otro día!
            </p>
            <Button template='verde' texto='FOTOS' url='https://docs.google.com/forms/d/e/1FAIpQLSfWFt_e66L9vBQa6JcUCa6h0il9nrNOiYuATXuGOwd-Lz9Mwg/viewform?usp=sf_link'></Button>
            </div>
        </section>
    )

}

export default RedSocial;