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
            <p> #Yamila&Dario
            <br/>
            ¡Preparate para nuestro gran día!
            <br/>
            Etiquetanos en Instagram con nuestro hashtag en tus fotos, reels o videos.
            <br/><br/>
            Te dejamos un drive para que subas todas tus fotos al otro día!
            </p>
            <Button template='verde' texto='FOTOS' url='https://drive.google.com/drive/folders/14HpXR6a7Lj_0hxa2aNrih8RWdJYhRmB0'></Button>
            </div>
        </section>
    )

}

export default RedSocial;
