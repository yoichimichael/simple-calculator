/* 
Props:
- backgroundColor
- onClick function
- Content


*/

export default function Button({ symbol, backgroundColor, callback}) {
  const styles = {
    background: 'none',
    border: '4px solid black',
    borderRadius: 24,
    cursor: 'pointer',
    height: 96,
    width: 96,
    fontSize: 48,
    fontWeight: 700,
    backgroundColor
  }

  return (
    <button style={styles} onClick={() => callback(symbol)}>{symbol}</button>
  )
}
