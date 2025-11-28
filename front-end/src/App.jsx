import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./Pages/Home";
import Cardapio from "./pages/Cardapio";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Reservas from "./pages/Reservas";
import MinhasReservas from "./pages/MinhasReservas";


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