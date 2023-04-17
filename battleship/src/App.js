import './styles/App.css';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Home from './views/Home';
import Game from './views/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/playing' element={<Game/>}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
