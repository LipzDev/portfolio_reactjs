import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';
import Sobre from './Components/Sobre/Sobre';
import Projetos from './Components/Projetos/Projetos';
import Repositorios from './Components/Repositorios/Repositorios';
import Contato from './Components/Contato/Contato';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="repositorios" element={<Repositorios />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
