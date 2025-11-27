import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import VerMesa from './Pages/Mesas/VerMesa';
import AtualizarMesa from './Pages/Mesas/AtualizarMesa';
import CadastrarMesa from './Pages/Mesas/CadastrarMesa';
import ReservarMesa from './Pages/Mesas/ReservarMesa';

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Cardapio from "./Pages/Cardapio";
import Reservas from "./Pages/Reservas";
import MinhasReservas from "./Pages/MinhasReservas";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/minhas-reservas" element={<MinhasReservas />} />
        <Route path="/ver-mesas" element={<VerMesa />} />
        <Route path="/atualizar-mesa" element={<AtualizarMesa />} />
        <Route path="/cadastrar-mesa" element={<CadastrarMesa />} />
        <Route path="/reservar-mesa" element={<ReservarMesa />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
