import logo from './logo.svg';
import Lottery from "./Lottery"
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;
