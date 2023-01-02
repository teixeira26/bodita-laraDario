import { useEffect, useRef } from 'react'
import './portada.css'
const Portada = ()=>{
    console.log(window.screen.height, window.screen.width)
    const dados = useRef();
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            // if(window.pageYOffset >=1000)alert('que onda capo')
            // console.log(dados.current.style.backgroundPositionY)
            dados.current.style.backgroundPositionY=-(window.pageYOffset*0.3)+"px";

        })
    }, [])
    
    return(
        <section>
            <div className='portada' ref={dados}>
                <div className='flecha' style={{top:(window.screen.height - 300)+"px"}}></div>
                <div className={'marco'}>
                    <img className="image" src="./assets/laraDario.png" alt="portada" draggable={false}/>
                </div>
            </div>
        </section>
    )
}

export default Portada;
