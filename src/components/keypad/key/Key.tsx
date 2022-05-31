import { KeyProps, NumberDecimalOrOperation } from "../../../CalculatorTypes"
import './Key.scss'



const Key = (props: KeyProps) => {
    return (
        <div 
            className={`key ${props.className} key-color-${props.bgType} key-width-${props.width}`}
            onClick={() => { props.argument(props.value) }}
            >
            {props.value}
            <code>{props.argument.current}</code>
        </div>
    )
}

export default Key