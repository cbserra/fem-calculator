import { OperationCanceledException } from "typescript";
import { BinaryOperation, CalculatorArgument, Operation, StringNumber, UnaryOperation } from "../CalculatorTypes";

export function calculateBinary(leftOperand: StringNumber, operator: BinaryOperation, rightOperand: StringNumber): number {

    switch (operator) {
        case '+':
            return parseFloat(leftOperand) + parseFloat(rightOperand)
        case '-':
            return parseFloat(leftOperand) - parseFloat(rightOperand)
        case '*':
            return parseFloat(leftOperand) * parseFloat(rightOperand)
        case '/':
            return parseFloat(leftOperand) / parseFloat(rightOperand)
    }
    
    return 0;
}

export function calculateUnary(operand: number, operator: UnaryOperation) {

    switch (operator) {
        case '=':
            return operand
        case 'DEL': 
            let strOperand = String(operand)
            if (strOperand.length > 1) {
                return strOperand.substring(1)
            }
            return 0
        case 'RESET':
            return 0
    }

}