export default function Display({ entry }){
  const styles = {
    container: {
      gridColumnStart: 'span 4',
      height: 96,
      border: '4px solid black',
      borderRadius: 24,
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0 24px',
      alignItems: 'center',
    },
    text: {
      fontSize: 48,
      fontWeight: 700,
    }
    
  }

  return (
    <div style={styles.container}>
      <span style={styles.text}>{entry}</span>
    </div>
  )
}