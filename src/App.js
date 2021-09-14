import './App.css';
import Pad from './components/Pad';

const styles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function App() {
  return (
    <div style={styles}>
      <Pad></Pad>
    </div>
  );
}

export default App;
