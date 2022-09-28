const CardMapa = (props)=>{
    const {icono, texto, titulo} = props;
    return(
        <div>
            <img src={`./assets/icono${icono}`} alt="" />
        </div>
    )
}