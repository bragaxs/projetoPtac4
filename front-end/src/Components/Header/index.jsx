import { Link } from "react-router-dom";
import "../global.css";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">RC</div>
        <div className="brand-text">
          <h1>Restaurante Casual</h1>
          <p>Delícias caseiras — atendimento acolhedor</p>
        </div>
      </div>

      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cardapio" className="nav-link">Cardápio</Link>
        <Link to="/reservas" className="nav-link">Reservas</Link>
        <Link to="/minhas-reservas" className="nav-link">Minhas Reservas</Link>
        <Link to="/cadastro" className="nav-link">Cadastro</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
}
