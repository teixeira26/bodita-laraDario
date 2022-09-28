import './button.css'
const Button = (props)=>{
    const {url, template, texto, onclick} = props
 return(
    <a href={url}><button className={template} onClick={onclick?onclick:null}>{texto}</button></a>
 )   
}

export default Button;