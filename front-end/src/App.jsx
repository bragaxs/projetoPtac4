import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importando os componentes
import Footer from "./components/Footer";                // Importando o Footer
import Header from "./components/Header";                // Importando o Header

// Importando as páginas
import Home from "./Pages/Home";                         // Importando a página Home
import Cardapio from "./Pages/Cardapio/Cardapio";     // Importando a página Cardápio
import Cadastro from "./Pages/Cadastro/Cadastro";     // Importando a página Cadastro

// Importando o CSS global


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
