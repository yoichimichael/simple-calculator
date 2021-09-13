import Button from "./Button"

export default function Pad() {
  const blankArray = Array(16);

  const styles = {
    display: 'grid',
  }

  return (
    <div style={styles}>
      {blankArray.map((e, i) => <Button key={i} idx={i}></Button>)}
    </div>
  )
}