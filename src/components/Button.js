/* 
Props:
- backgroundColor
- onClick function
- Content


*/

export default function Button({idx}) {
  const styles = {
    background: 'none',
    border: '4px solid black',
    borderRadius: '25%',
    cursor: 'pointer',
    height: 96,
    width: 96,
    fontSize: 48,
    fontWeight: 700

  }

  return (
    <button style={styles}>{idx + 1}</button>
  )
}
