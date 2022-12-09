import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
function App() {


  const {onToggleButton, tg} = useTelegram()
  console.log(tg.ready)

  useEffect(() => {
    tg.ready();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path={'/form'} element={<Form/>}/>
      </Routes>
      {/* <button onCanPlay={onToggleButton}>toggle</button> */}
    </div>
  );
}

export default App;
