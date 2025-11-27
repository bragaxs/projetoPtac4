import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Cardapio from "./pages/Cardapio";
import Reservas from "./pages/Reservas";
import MinhasReservas from "./pages/MinhasReservas";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/minhas-reservas" element={<MinhasReservas />} />
      </Routes>
    </BrowserRouter>
  );
}
