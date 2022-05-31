import Key from "./components/keypad/key/Key"

type Operation = '+' | '-' | '*' | '/' | 'DEL' | 'RESET' | '='

export type NumberDecimalOrOperation = number | '.' | Operation

export type NumberOrDecimal = number | '.'

export interface CalculatorArgument {
    argument: NumberDecimalOrOperation
}

export interface KeyProps {
    value: NumberDecimalOrOperation,
    width: 1 | 2,
    bgType: 1 | 2 | 3,
    className: string,
    setArgument: any
}
