import { useState, useEffect } from 'react';
import Button from "./Button"
import Display from "./Display";

const GREY = '#c5c5c5';
const YELLOW = '#fec666';
const RED = '#ec5e60';
const BUTTON_PROPERTIES = [
  [1, GREY],
  [2, GREY],
  [3, GREY],
  ['+', YELLOW],
  [4, GREY],
  [5, GREY],
  [6, GREY],
  ['–', YELLOW],
  [7, GREY],
  [8, GREY],
  [9, GREY],
  ['X', YELLOW],
  ['C', RED],
  [0, GREY],
  ['=', YELLOW],
  ['÷', YELLOW],
]

export default function Pad() {
  const [buttonProperties, setButtonProperties] = useState([]);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    setButtonProperties(BUTTON_PROPERTIES);
  }, [])

  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, min-content)',
    gridColumnGap: 10,
    gridRowGap: 10,
    padding: 24,
    border: '4px solid black',
    borderRadius: 24,
  }
  
  function clearEntry(){
    setOperator('');
    setFirstNum(0);
    setSecondNum(0);
    setResult(null);
  }

  function enterNumber(num){
    if (result !== null) clearEntry();
    if (!operator) setFirstNum(firstNum * 10 + num);
    else setSecondNum(secondNum * 10 + num);
  }

  function compute(){
    switch(operator){
      case '+':
        setResult(firstNum + secondNum);
        break;
      case '–':
        setResult(firstNum - secondNum);
        break;
      case 'X':
        setResult(firstNum * secondNum);
        break;
      case '÷':
        setResult(firstNum / secondNum);
      default:
        return;
    }
  }

  function determineCallback(symbol){
    if (typeof symbol === 'number') {
      return enterNumber;
    } else {
      if (symbol === '=') {
        return compute;
      } else if (symbol === 'C') {
         return clearEntry;
      } else {
        return setOperator;
      }
    }
  }

  console.log({firstNum, operator, secondNum, result});
  return (
    <div style={styles}>
      <Display entry={result !== null ? result : operator ? secondNum : firstNum}/>
      {buttonProperties.length ? buttonProperties.map((p, i) => <Button key={i} symbol={p[0]} backgroundColor={p[1]} callback={determineCallback(p[0])}/>) : null}
    </div>
  )
}