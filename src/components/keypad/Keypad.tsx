import { useEffect } from 'react'
import { KB_DEL_KEY, EQUALS_KEY, NUMBER_KEYS, OPERATOR_KEYS, DEL_KEY, KB_ENTER_KEY, RESET_KEY, DECIMAL_KEY } from '../../utils/CalculatorTypes'
import Key from './key/Key'
import './Keypad.scss'

const Keypad = (props: {
    handleDecimalInput: any,
    handleDelete: any,
    handleEqualsInput: any,
    handleNumberInput: any,
    handleOperatorInput: any,
    handleReset: any,
    }) => {

    const handleDecimalInput = props.handleDecimalInput
    const handleDelete = props.handleDelete
    const handleEqualsInput = props.handleEqualsInput
    const handleNumberInput = props.handleNumberInput
    const handleOperatorInput = props.handleOperatorInput
    const handleReset = props.handleReset

    const keys: JSX.Element[] = [
        <Key value={'7'} bgType={3} width={1} key={1} className={'key-7'} handleClick={handleNumberInput} />,
        <Key value={'8'} bgType={3} width={1} key={2} className={'key-8'} handleClick={handleNumberInput} />,
        <Key value={'9'} bgType={3} width={1} key={3} className={'key-9'} handleClick={handleNumberInput} />,
        <Key value={'DEL'} bgType={2} width={1} key={4} className={'key-del key-func'} handleClick={handleDelete} />,
        <Key value={'4'} bgType={3} width={1} key={5} className={'key-4'} handleClick={handleNumberInput} />,
        <Key value={'5'} bgType={3} width={1} key={6} className={'key-5'} handleClick={handleNumberInput} />,
        <Key value={'6'} bgType={3} width={1} key={7} className={'key-6'} handleClick={handleNumberInput} />,
        <Key value={'+'} bgType={3} width={1} key={8} className={'key-add key-func'} handleClick={handleOperatorInput} />,
        <Key value={'1'} bgType={3} width={1} key={9} className={'key-1'} handleClick={handleNumberInput} />,
        <Key value={'2'} bgType={3} width={1} key={10} className={'key-2'} handleClick={handleNumberInput} />,
        <Key value={'3'} bgType={3} width={1} key={11} className={'key-3'} handleClick={handleNumberInput} />,
        <Key value={'-'} bgType={3} width={1} key={12} className={'key-sub key-func'} handleClick={handleOperatorInput} />,
        <Key value={'.'} bgType={3} width={1} key={13} className={'key-dec'} handleClick={handleDecimalInput} />,
        <Key value={'0'} bgType={3} width={1} key={14} className={'key-0'} handleClick={handleNumberInput} />,
        <Key value={'/'} bgType={3} width={1} key={15} className={'key-div key-func'} handleClick={handleOperatorInput} />,
        <Key value={'x'} bgType={3} width={1} key={16} className={'key-mul key-func'} handleClick={() => handleOperatorInput('*')} />,
        <Key value={'RESET'} bgType={2} width={2} key={17} className={'key-reset key-func'} handleClick={handleReset} />,
        <Key value={'='} bgType={1} width={2} key={18} className={'key-eq key-func'} handleClick={handleEqualsInput} />
      ]

    const handleKeyDown = ({ key, shiftKey, ctrlKey, metaKey, }: KeyboardEvent) => {
        if (NUMBER_KEYS.includes(key) && !shiftKey) {
            handleNumberInput(key)
        } else if (DECIMAL_KEY === key) {
            handleDecimalInput(key)
        } else if (OPERATOR_KEYS.includes(key)) {
            let opKey = key.toLowerCase() === 'x' ? '*' : key
            handleOperatorInput(opKey)
        } else if ([EQUALS_KEY, KB_ENTER_KEY].includes(key)) {
            handleEqualsInput(EQUALS_KEY)
        } else if (KB_DEL_KEY === key && (!metaKey && !ctrlKey)) {
            handleDelete(DEL_KEY)
        } else if (KB_DEL_KEY === key && (metaKey || ctrlKey)) {
            handleReset(RESET_KEY)
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', handleKeyDown)
        return () => document.body.removeEventListener('keydown', handleKeyDown)
    })

    return (
        <div className="keypad-container">
            {keys}
        </div>
    )
}

export default Keypad