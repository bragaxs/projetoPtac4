import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas
import Home from "./Pages/Home";
import Cardapio from "./Pages/Cardapio/Cardapio";

// Arquivos reais encontrados:
import Cadastro from "./Pages/Usuarios/cadastroUsuario";
import Login from "./Pages/Usuarios/loginUsuario";
import Reservas from "./Pages/Reserva/Reservas";
import MinhasReservas from "./Pages/Reserva/MinhasReservas";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />

        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />

        <Route path="/reservas" element={<Reservas />} />
        <Route path="/minhas-reservas" element={<MinhasReservas />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
