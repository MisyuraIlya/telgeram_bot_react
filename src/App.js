import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {


  const {onToggleButton, tg} = useTelegram()
  console.log(tg.ready)

  useEffect(() => {
    tg.ready();
  },[])

  return (
    <div className="App">
      <button onCanPlay={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
