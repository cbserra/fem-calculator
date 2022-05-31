import { KeyProps, NumberDecimalOrOperation } from "../../../CalculatorTypes"
import './Key.scss'



const Key = (props: KeyProps) => {
    return (
        <div 
            className={`key ${props.className} key-color-${props.bgType} key-width-${props.width}`}
            onClick={() => { props.setArgument(props.value) }}
            >
            {props.value}
        </div>
    )
}

export default Key