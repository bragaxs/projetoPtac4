import { useState } from "react";
import "../../App.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../Pages/Mesas/global.css";

function ListarReservas() {
  const [reservas, setReservas] = useState([
    { id: 1, mesa: 5, data: "2025-11-02 19:30" },
    { id: 2, mesa: 12, data: "2025-11-05 20:00" },
    { id: 3, mesa: 8, data: "2025-11-08 18:45" },
  ]);

  const handleCancelar = (id) => {
    if (window.confirm(`Tem certeza que deseja cancelar a reserva #${id}?`)) {
      setReservas(reservas.filter((reserva) => reserva.id !== id));
      alert(`Reserva #${id} cancelada com sucesso!`);
    }
  };

  const handleEditar = (id) => {
    alert(`Editar reserva #${id}.`);
  };

  const handleVerDetalhes = (id) => {
    alert(`Detalhes da reserva #${id}.`);
  };

  return (
    <>
     
      <div className="reservas-bg">
        <div className="reservas-card">
          <h2 className="titulo">🍽️ Minhas Reservas</h2>

          {reservas.length === 0 ? (
            <p className="sem-reservas">Você não possui reservas ativas.</p>
          ) : (
            <table className="reservas-table">
              <thead>
                <tr>
                  <th>ID Reserva</th>
                  <th>Nº Mesa</th>
                  <th>Data</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {reservas.map((reserva) => (
                  <tr key={reserva.id}>
                    <td>#{reserva.id}</td>
                    <td>{reserva.mesa}</td>
                    <td>{reserva.data}</td>
                    <td className="btn-col">
                      <button
                        className="btn btn-details"
                        onClick={() => handleVerDetalhes(reserva.id)}
                      >
                        Ver
                      </button>
                      <button
                        className="btn btn-edit"
                        onClick={() => handleEditar(reserva.id)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-cancel"
                        onClick={() => handleCancelar(reserva.id)}
                      >
                        Cancelar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
   
    </>
  );
}

export default ListarReservas;
