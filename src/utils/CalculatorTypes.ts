export type ThemeMode = 'one' | 'two' | 'three'

export type CalculatorKey = OperatorKey | DelKey | ResetKey | EqualsKey | DecimalKey | NumberKey
export type OperatorKey = '+' | '-' | '*' | '/'
export type DelKey = 'DEL'
export type ResetKey = 'RESET'
export type EqualsKey = '=' 
export type DecimalKey = '.'
export type NumberKey = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
 | '9'
export type NumberDecimalOrOperator = string | DecimalKey | OperatorKey

export interface CalculatorOperation {
    leftOperand: string,
    operator: OperatorKey,
    rightOperand: string
}

export interface KeyProps {
    value: CalculatorKey,
    width: 1 | 2,
    bgType: 1 | 2 | 3,
    className: string,
    handleClick: any
}

export type CalculatorThemeKey = ThemeMode

export interface CalculatorThemeData {
    data: {
        [key in CalculatorThemeKey]: CalculatorTheme;
    }
}

export interface CalculatorTheme {
    id: string,
    name: string,
    font: string,
    colors: {
        body: {
            background: string,
            text: string
        },
        keypad: {
            background: string
        },
        screen: {
            background: string,
            text: string
        },
        toggle: {
            background: string,
            indicator: string,
            active: {
                indicator: string
            }
        },
        buttons: {
            delReset: {
                active: {
                    background: string,
                    shadow: string
                },
                background: string,
                shadow: string,
                text: string
            },
            equals: {
                active: {
                    background: string,
                    shadow: string
                },
                background: string,
                shadow: string,
                text: string
            },
            numericOp: {
                active: {
                    background: string,
                    shadow: string
                },
                background: string,
                shadow: string,
                text: string
            }
        }
    }
}