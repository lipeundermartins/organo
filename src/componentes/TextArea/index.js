import './TextArea.css'

const TextArea = (props) => {

    const placeHolderModificada = `${props.placeholder}...`


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="text-area">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeHolderModificada}/>
        </div>
    )
}

export default TextArea