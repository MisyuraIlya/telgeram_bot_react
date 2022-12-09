import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {


  const {onToggleButton, tg} = useTelegram()
  console.log(tg.ready)

  useEffect(() => {
    tg.ready();
  },[])

  return (
    <div className="App">
      <Header/>
      <button onCanPlay={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
