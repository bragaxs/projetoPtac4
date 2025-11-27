import { useEffect, useState } from "react";
import axios from "axios";

export default function MinhasReservas() {
  const [reservas, setReservas] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios.get(`http://localhost:3001/reservas/${userId}`).then(res => {
      setReservas(res.data);
    });
  }, [userId]);

  return (
    <div>
      <h1>Minhas Reservas</h1>
      {reservas.map((r) => (
        <p key={r.id}>Mesa {r.mesa} - {r.data} - {r.horario}</p>
      ))}
    </div>
  );
}
