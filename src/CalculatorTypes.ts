import Key from "./components/keypad/key/Key"

export type Operation = UnaryOperation | BinaryOperation

export type UnaryOperation = 'DEL' | 'RESET' | '='
export type BinaryOperation = '+' | '-' | '*' | '/'

export type NumberDecimalOrOperation = string | Decimal | Operation

export type NumberOrDecimal = string | Decimal
export type Decimal = '.'
export type StringNumber = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export interface CalculatorArgument {
    argument: NumberDecimalOrOperation
}

export interface KeyProps {
    value: NumberDecimalOrOperation,
    width: 1 | 2,
    bgType: 1 | 2 | 3,
    className: string,
    argument: any
}
