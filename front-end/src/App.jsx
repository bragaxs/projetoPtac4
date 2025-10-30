import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import VerMesa from './Pages/Mesas/VerMesa';
import AtualizarMesa from './Pages/Mesas/AtualizarMesa';
import CadastrarMesa from './Pages/Mesas/CadastrarMesa';
import ReservarMesa from './Pages/Mesas/ReservarMesa';


function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
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
