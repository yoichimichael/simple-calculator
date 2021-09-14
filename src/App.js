import './App.css';
import Pad from './components/Pad';

const styles = {
  display: 'flex',
  justifyContent: 'center',
}

function App() {
  return (
    <div style={styles}>
      <Pad></Pad>
    </div>
  );
}

export default App;
