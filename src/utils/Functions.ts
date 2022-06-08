// import math from "mathjs";
import {  DelKey, OperatorKey, ResetKey } from "./CalculatorTypes";
const math = require('mathjs')

export function calculateBinary(leftOperand: string, operator: OperatorKey, rightOperand: string): number {
    let result = math.evaluate(`${leftOperand} ${operator} ${rightOperand}`)
    // switch (operator) {
        
    //     case '+':
    //         return parseFloat(leftOperand) + parseFloat(rightOperand)
    //     case '-':
    //         return parseFloat(leftOperand) - parseFloat(rightOperand)
    //     case '*':
    //         return parseFloat(leftOperand) * parseFloat(rightOperand)
    //     case '/':
    //         return parseFloat(leftOperand) / parseFloat(rightOperand)
    // }
    
    return result;
}

const deleteFromScreen = (operand: string): string => {
    return operand.substring(0, operand.length-1)
}

export function deleteOrReset(screenText: string, key: DelKey | ResetKey): string {
    
    switch (key) {
        case 'DEL': 
            if (screenText !== undefined && screenText !== null && screenText.length > 1) {
                return deleteFromScreen(screenText)
            } else {
                return '0'
            }
        case 'RESET':
            return '0'
    }
}