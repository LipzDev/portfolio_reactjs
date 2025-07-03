import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Inicio from "./Components/Inicio/Inicio";
import Sobre from "./Components/Sobre/Sobre";
import Repositorios from "./Components/Repositorios/Repositorios";
import Contato from "./Components/Contato/Contato";
import Error from "./Components/Error/Error";
import { ThemeProvider } from "./Context/ThemeContext";
import React from "react";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        {/* <Particles /> */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="repositorios" element={<Repositorios />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
