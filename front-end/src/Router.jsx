// src/Router.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUsuario from "./Pages/Usuarios/loginUsuario";
import CadastroUsuario from "./Pages/Usuarios/cadastroUsuario";
import Cardapio from "./Pages/Cardapio/CardapioA";
import Reservas from "./Pages/Reservas/Reservas";
import MinhasReservas from "./Pages/Reservas/MinhasReservas";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginUsuario />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/reservar" element={<Reservas />} />
        <Route path="/minhas-reservas" element={<MinhasReservas />} />
        <Route path="*" element={<LoginUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}
