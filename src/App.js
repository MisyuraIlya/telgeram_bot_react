import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {


  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  },[])

  return (
    <div className="App">
      <button onCanPlay={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
