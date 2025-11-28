import '../../App.css';
import Header from '.../../Components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import '../Mesas/global.css';

function CadastrarMesa() {
  return (
    <>
  
      <div className="cadastrar-wrapper">
        <div className="cadastrar-container">
          <h2 className="titulo">Cadastrar Mesa</h2>

          <form>
            <div className="input-card">
              <h4>Número da Mesa</h4>
              <input type="text" placeholder="Digite o número da mesa" />
            </div>

            <div className="input-card">
              <h4>Capacidade da Mesa</h4>
              <input type="number" placeholder="Digite a capacidade da mesa" />
            </div>

            <div className="input-card">
              <h4>Status da Mesa</h4>
              <select>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary">Salvar</button>
              <button type="reset" className="btn btn-warning">Editar / Excluir</button>
              <Link to="/mesas" className="btn btn-secondary">Cancelar</Link>
            </div>
          </form>
        </div>
      </div>
   
    </>
  );
}

export default CadastrarMesa;
