import { CalculatorArgument } from "../../CalculatorTypes"
import './Screen.scss'

interface Operation {
    operation: '+' | '-' | '=' | '/' | 'DEL' | 'RESET'
}

type NumberDecimalOrOperation = number | '.' | Operation

interface ScreenProperties {
    screenValue: any[],
    setScreenValue: any,
    // argument: CalculatorArgument,
}

const Screen = (props: ScreenProperties) => {

    const screenValue = props.screenValue
    const setScreenValue = props.setScreenValue    

    return (
        <div className="screen-container">
            <div className="screen-value">
                {screenValue && screenValue.map(value => value)}
            </div>
        </div>
    )
}

export default Screen