import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home.jsx";
import Cardapio from "./Pages/Cardapio";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Reservas from "./Pages/Reservas";
import MinhasReservas from "./Pages/MinhasReservas";


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