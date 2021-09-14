import Button from "./Button"
import Display from "./Display";

const GREY = '#c5c5c5';
const YELLOW = '#fec666';
const RED = '#ec5e60';

export default function Pad() {
  // const [];

  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, min-content)',
    // gridTemplateRows: 'repeat(5, min-content)',
    gridColumnGap: 10,
    gridRowGap: 10,
    padding: '24px',
    border: '4px solid black',
    borderRadius: 24,
  }

  const buttonProperties = [
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

  return (
    <div style={styles}>
      <Display/>
      {buttonProperties.map((p, i) => <Button key={i} symbol={p[0]} backgroundColor={p[1]}/>)}
    </div>
  )
}