import { KeyProps } from "../../../utils/CalculatorTypes"
import './Key.scss'

const Key = (props: KeyProps) => {
    return (
        <button 
            className={`key ${props.className} key-color-${props.bgType} key-width-${props.width}`}
            onClick={() => { props.handleClick(props.value) }}
            >
            {props.value}
            <code>{props.handleClick.current}</code>
        </button>
    )
}

export default Key