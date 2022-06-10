import { evaluate } from 'mathjs'
import { useEffect, useRef, useState } from 'react'
import './App.scss'
import { DecimalKey, OperatorKey, EqualsKey, NumberKey, CalculatorKey, ResetKey, DelKey } from './utils/CalculatorTypes'
import Header from './components/header/Header'
import Key from './components/keypad/key/Key'
import Keypad from './components/keypad/Keypad'
import Screen from './components/screen/Screen'
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles } from './theme/GlobalStyles'
import { useTheme } from './hooks/useTheme'

const Container = styled.div``

const App = () => {
  const {theme, themeLoaded} = useTheme();

  const [screenTotal, setScreenTotal] = useState<string>('0')
  const [selectedTheme, setSelectedTheme] = useState(theme)
  const [flash, setFlash] = useState(false)

  const leftOperand = useRef<string>()
  const rightOperand = useRef<string>()
  const operator = useRef<OperatorKey>()

  const lastKeyPressed = useRef<CalculatorKey>()
  const lastKeyPressedWasEquals = () => lastKeyPressed?.current && '=' === lastKeyPressed.current
  const lastKeyPressedWasOperator = () => lastKeyPressed?.current && ['+', '-', '*', '/'].includes(lastKeyPressed.current)
  const lastKeyPressedWasEqualsOrOperator = () => lastKeyPressedWasEquals() || lastKeyPressedWasOperator()

  const setLastKeyPressed = (key: CalculatorKey) => {
    lastKeyPressed.current = key
  }

  const callEvaluate = (left: string, op: OperatorKey, right: string) => {
    const expression = `${left} ${op} ${right}`
    const total = evaluate(expression)
    
    setScreenTotal(String(total))
    resetOperatorAndOperands()

    return total
  }

  const handleNumberInput = (arg: NumberKey) => {
      
      if (lastKeyPressedWasOperator()) {
        setScreenTotal(arg)
      } else {
        setScreenTotal(prevVal => prevVal === '0' ? arg : prevVal + arg)
      }

      setLastKeyPressed(arg)
  }

  const handleDecimalInput = (arg: DecimalKey) => {

      if (lastKeyPressedWasEqualsOrOperator()) {
        setScreenTotal(`0${arg}`)  
      } else {
        setScreenTotal(prevValue => prevValue.indexOf(arg) > 0 ? prevValue : prevValue + arg)
      }

      setLastKeyPressed(arg)
  }

  const handleEqualsInput = (key: EqualsKey) => {
    setFlash(prevValue => !prevValue)
    if (leftOperand.current !== undefined && operator.current !== undefined) {
      rightOperand.current = screenTotal
      callEvaluate(leftOperand.current, operator.current, rightOperand.current)
    }

    setLastKeyPressed(key)
  }

  const flashTotal = () => {
    setFlash(true)
    setTimeout(() => setFlash(false), 200);
  }

  const handleOperatorInput = (key: OperatorKey) => {
    flashTotal()

    const prevOperator = operator?.current ? operator.current : key

    if (leftOperand.current === undefined) {
      leftOperand.current = screenTotal
    } else if (rightOperand.current === undefined) {
      rightOperand.current = screenTotal
      leftOperand.current = callEvaluate(leftOperand.current, prevOperator, rightOperand.current)
    } else {
      leftOperand.current = callEvaluate(leftOperand.current, prevOperator, rightOperand.current)
    }

    operator.current = key
    setLastKeyPressed(key)
  }

  const handleDelete = (key: DelKey) => {
      setScreenTotal((prevValue:string) => {
        return (prevValue === '0' || prevValue.length === 1) ? '0' : prevValue?.substring(0, prevValue.length - 1)
      })

      setLastKeyPressed(key)
  }

  const handleReset = (key: ResetKey) => {
    setFlash(prevValue => !prevValue)
    setScreenTotal('0')
    resetOperatorAndOperands()

    setLastKeyPressed(key)
  }

  const resetOperatorAndOperands = () => {
    leftOperand.current = undefined
    operator.current = undefined
    rightOperand.current = undefined
  }
  
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
    <Key value={'*'} bgType={3} width={1} key={16} className={'key-mul key-func'} handleClick={handleOperatorInput} />,
    <Key value={'RESET'} bgType={2} width={2} key={17} className={'key-reset key-func'} handleClick={handleReset} />,
    <Key value={'='} bgType={1} width={2} key={18} className={'key-eq key-func'} handleClick={handleEqualsInput} />
  ]

  useEffect(() => {
    setSelectedTheme(theme)
   }, [themeLoaded, theme])

  return (
    <>
    { themeLoaded && <ThemeProvider theme={selectedTheme}>
        <GlobalStyles/>
        <Container className='App'>
          <Header setter={ setSelectedTheme }/>
          <Screen 
                  screenTotal={screenTotal} 
                  flash={flash}
          />
          <Keypad keys={keys} />
      </Container>
      </ThemeProvider>
     }
  </>
)}

export default App
