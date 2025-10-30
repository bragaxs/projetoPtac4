import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <span>Sambariló Foods</span>
      <nav>
        <Link to="/iniciar">Iniciar</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/atualizar-perfil">Atualizar Perfil</Link>
      </nav>
    </header>
  );
}

export default Header;
