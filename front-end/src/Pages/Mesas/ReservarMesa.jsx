import { useState } from "react";
import "../../App.css";
import Header from ".../../Components/Header";
import Footer from ".../../Components/Footer";


function ReservarMesa() {
  const [mesa, setMesa] = useState("");
  const [data, setData] = useState("");
  const [cliente, setCliente] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mesa || !data) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    alert(`Reserva feita com sucesso!
Mesa: ${mesa}
Data: ${data}
Cliente: ${cliente || "Não informado"}`);
    
  
  };

  return (
    <>
     
      <div className="reserva-bg">
        <div className="reserva-card">
          <h2>📅 Reservar Mesa</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Número da Mesa</label>
              <input
                type="number"
                value={mesa}
                onChange={(e) => setMesa(e.target.value)}
                placeholder="Ex: 5"
                required
              />
            </div>

            <div className="form-group">
              <label>Data e Hora</label>
              <input
                type="datetime-local"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Nome do Cliente</label>
              <input
                type="text"
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
                placeholder="Ex: João Silva"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    
    </>
  );
}

export default ReservarMesa;
