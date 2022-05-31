import { useEffect, useState } from 'react';
import './App.css';
import { CalculatorArgument, KeyProps } from './CalculatorTypes';
import Header from './components/header/Header';
import Key from './components/keypad/key/Key';
import Keypad from './components/keypad/Keypad';
import Screen from './components/screen/Screen';

function App() {
  const [screenValue, setScreenValue] = useState<any[]>([0])
  const [argument, setArgument] = useState<CalculatorArgument>()

  const keys: JSX.Element[] = [
    <Key value={7} bgType={3} width={1} key={1} className={'key-7'} setArgument={setArgument} />,
    <Key value={8} bgType={3} width={1} key={2} className={'key-8'} setArgument={setArgument} />,
    <Key value={9} bgType={3} width={1} key={3} className={'key-9'} setArgument={setArgument} />,
    <Key value={'DEL'} bgType={2} width={1} key={4} className={'key-del'} setArgument={setArgument} />,

    <Key value={4} bgType={3} width={1} key={5} className={'key-4'} setArgument={setArgument} />,
    <Key value={5} bgType={3} width={1} key={6} className={'key-5'} setArgument={setArgument} />,
    <Key value={6} bgType={3} width={1} key={7} className={'key-6'} setArgument={setArgument} />,
    <Key value={'+'} bgType={3} width={1} key={8} className={'key-add'} setArgument={setArgument} />,


    <Key value={1} bgType={3} width={1} key={9} className={'key-1'} setArgument={setArgument} />,
    <Key value={2} bgType={3} width={1} key={10} className={'key-2'} setArgument={setArgument} />,
    <Key value={3} bgType={3} width={1} key={11} className={'key-3'} setArgument={setArgument} />,
    <Key value={'-'} bgType={3} width={1} key={12} className={'key-sub'} setArgument={setArgument} />,

    <Key value={'.'} bgType={3} width={1} key={13} className={'key-dec'} setArgument={setArgument} />,
    <Key value={0} bgType={3} width={1} key={14} className={'key-0'} setArgument={setArgument} />,
    <Key value={'/'} bgType={3} width={1} key={15} className={'key-div'} setArgument={setArgument} />,
    <Key value={'*'} bgType={3} width={1} key={16} className={'key-mul'} setArgument={setArgument} />,
    
    <Key value={'RESET'} bgType={2} width={2} key={17} className={'key-reset'} setArgument={setArgument} />,
    <Key value={'='} bgType={1} width={2} key={18} className={'key-eq'} setArgument={setArgument} />,
  ]

  useEffect(() => {
    setScreenValue((prevValue) => [...prevValue, argument])
  }, [argument, setScreenValue])

  return (
    <div className="App">
      <Header />
      <Screen screenValue={screenValue} setScreenValue={setScreenValue} /> {/* argument={argument} /> */}
      <Keypad keys={keys} />
    </div>
  );
}

export default App;
