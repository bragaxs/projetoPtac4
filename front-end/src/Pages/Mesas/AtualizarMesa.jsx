import { useState, useEffect } from "react";
import "../../App.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../Mesas/global.css";

function AtualizarMesa({ mesaSelecionada }) {
  const [numero, setNumero] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [status, setStatus] = useState("ativo");

  useEffect(() => {
    if (mesaSelecionada) {
      setNumero(mesaSelecionada.numero);
      setCapacidade(mesaSelecionada.capacidade);
      setStatus(mesaSelecionada.status);
    }
  }, [mesaSelecionada]);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Mesa atualizada com sucesso!
Número: ${numero}
Capacidade: ${capacidade}
Status: ${status}`);
  
  };

  return (
    <>
    
      <div className="atualizar-bg">
        <div className="atualizar-card">
          <h2>🪑 Atualizar Mesa</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Número da Mesa</label>
              <input
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Capacidade</label>
              <input
                type="number"
                value={capacidade}
                onChange={(e) => setCapacidade(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default AtualizarMesa;
