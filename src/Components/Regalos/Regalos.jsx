import './regalos.css'
import Button from '../Buttons/Button';
import PopUp from './PopUp'
import { useState } from 'react';

const Regalos =()=>{
    const [modalActive, setModalActive] = useState(false)
    const abrirModal=()=>{
        setModalActive(true)
    }
    return(
        <section className="regalosSection">
            <div>
                <img src="./assets/icono-regalo.svg" alt="" draggable={false}/>
                <p>El mejor regalo es tu presencia, pero si deseás obsequiarnos algo...</p>
                <Button texto='VER MÁS' template='blanco'  onclick={abrirModal}></Button>
                {modalActive&&
                <PopUp setModalActive={setModalActive}></PopUp>}
            </div>
        </section>
    )
}

export default Regalos;