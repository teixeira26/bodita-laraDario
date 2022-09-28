import './button.css'
const Button = (props)=>{
    const {url, template, texto} = props
 return(
    <a href={url}><button className={template}>{texto}</button></a>
 )   
}

export default Button;