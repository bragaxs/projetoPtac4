import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Cardapio from "./Pages/Cardapio";
import Reservas from "./Pages/Reservas";
import MinhasReservas from "./Pages/MinhasReservas";

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
