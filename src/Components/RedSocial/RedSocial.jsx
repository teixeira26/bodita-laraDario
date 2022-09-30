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
            <div className="redSocialContainer" ref={redSocial}>
            <img src="./assets/icono-instagram.svg" alt="" draggable={false}/>
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