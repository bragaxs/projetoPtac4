import styles from './Footer.module.css';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footer}>
      Feito com carinho para você. Volte sempre!!
    </footer>
  );
}

export default Footer;
