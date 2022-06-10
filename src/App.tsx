import { evaluate } from 'mathjs'
import { useEffect, useRef, useState } from 'react'
import './App.scss'
import { DecimalKey, OperatorKey, EqualsKey, NumberKey, CalculatorKey, ResetKey, DelKey, OPERATOR_KEYS, EQUALS_KEY } from './utils/CalculatorTypes'
import Header from './components/header/Header'
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
  const lastKeyPressedWasEquals = () => lastKeyPressed?.current && EQUALS_KEY === lastKeyPressed.current
  const lastKeyPressedWasOperator = () => lastKeyPressed?.current && OPERATOR_KEYS.includes(lastKeyPressed.current)
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

  useEffect(() => {
    setSelectedTheme(theme)
   }, [themeLoaded, theme])

  return (
    <>
    { themeLoaded && <ThemeProvider theme={selectedTheme}>
        <GlobalStyles/>
        <Container className='App'>
          <Header setter={ setSelectedTheme }/>
          <main>
            <Screen 
                    screenTotal={screenTotal} 
                    flash={flash}
            />
            <Keypad 
              handleDecimalInput={handleDecimalInput}
              handleDelete={handleDelete}
              handleEqualsInput={handleEqualsInput}
              handleNumberInput={handleNumberInput}
              handleOperatorInput={handleOperatorInput}
              handleReset={handleReset}
              />
          </main>
      </Container>
      </ThemeProvider>
     }
  </>
)}

export default App
