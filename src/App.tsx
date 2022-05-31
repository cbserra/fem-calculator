import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { CalculatorArgument, KeyProps, NumberDecimalOrOperation, NumberOrDecimal, Operation } from './CalculatorTypes';
import Header from './components/header/Header';
import Key from './components/keypad/key/Key';
import Keypad from './components/keypad/Keypad';
import Screen from './components/screen/Screen';

function App() {
  const [screenValue, setScreenValue] = useState<any[]>([0])
  const argument = useRef<NumberDecimalOrOperation>()

  const leftOperand = useRef<NumberOrDecimal | null>()
  const rightOperand = useRef<NumberOrDecimal | null>()
  const operator = useRef<Operation | null>()

  useEffect(() => {
    console.log(`screenValue = ${screenValue}`)
  }, [screenValue])

  const argumentCallback = useCallback((arg: NumberDecimalOrOperation | null | undefined) => {
    if (arg === null || arg === undefined) {
      return
    }
    argument.current = arg

    if (arg === 'RESET') {
      setScreenValue(['0'])
      return
    } else if (arg === 'DEL') {
      console.log(`screenValue = ${screenValue}`)
      console.log(`screenValue.length = ${screenValue.length}`)
      if (screenValue.length > 1) {
        setScreenValue((prevValue) => {
          const newValue = [...prevValue]
          newValue.pop()
          return newValue
        })
      } else {
        setScreenValue(['0'])
      }

      return
    }
    
    if (leftOperand.current === null) {
      leftOperand.current = arg
    } else if (arg === '.') {
      if (operator.current === null) {
        leftOperand.current += arg
      } else if (rightOperand.current !== null) {
        rightOperand.current +=arg
      }
    }

    setScreenValue((prevValue) => [...prevValue, argument.current])

    
    console.log(`leftOperand = ${JSON.stringify(leftOperand)}`)
    console.log(`argument = ${JSON.stringify(argument)}`)
      console.log(`typeof arg = ${typeof arg}`)
  }, [screenValue]);


  const keys: JSX.Element[] = [
    <Key value={'7'} bgType={3} width={1} key={1} className={'key-7'} argument={argumentCallback} />,
    <Key value={'8'} bgType={3} width={1} key={2} className={'key-8'} argument={argumentCallback} />,
    <Key value={'9'} bgType={3} width={1} key={3} className={'key-9'} argument={argumentCallback} />,
    <Key value={'DEL'} bgType={2} width={1} key={4} className={'key-del'} argument={argumentCallback} />,
    <Key value={'4'} bgType={3} width={1} key={5} className={'key-4'} argument={argumentCallback} />,
    <Key value={'5'} bgType={3} width={1} key={6} className={'key-5'} argument={argumentCallback} />,
    <Key value={'6'} bgType={3} width={1} key={7} className={'key-6'} argument={argumentCallback} />,
    <Key value={'+'} bgType={3} width={1} key={8} className={'key-add'} argument={argumentCallback} />,
    <Key value={'1'} bgType={3} width={1} key={9} className={'key-1'} argument={argumentCallback} />,
    <Key value={'2'} bgType={3} width={1} key={10} className={'key-2'} argument={argumentCallback} />,
    <Key value={'3'} bgType={3} width={1} key={11} className={'key-3'} argument={argumentCallback} />,
    <Key value={'-'} bgType={3} width={1} key={12} className={'key-sub'} argument={argumentCallback} />,
    <Key value={'.'} bgType={3} width={1} key={13} className={'key-dec'} argument={argumentCallback} />,
    <Key value={'0'} bgType={3} width={1} key={14} className={'key-0'} argument={argumentCallback} />,
    <Key value={'/'} bgType={3} width={1} key={15} className={'key-div'} argument={argumentCallback} />,
    <Key value={'*'} bgType={3} width={1} key={16} className={'key-mul'} argument={argumentCallback} />,
    <Key value={'RESET'} bgType={2} width={2} key={17} className={'key-reset'} argument={argumentCallback} />,
    <Key value={'='} bgType={1} width={2} key={18} className={'key-eq'} argument={argumentCallback} />,
  ]

  return (
    <div className="App">
      <Header />
      <Screen screenValue={screenValue} setScreenValue={setScreenValue} /> {/* argument={argument} /> */}
      <Keypad keys={keys} />
    </div>
  );
}

export default App;
