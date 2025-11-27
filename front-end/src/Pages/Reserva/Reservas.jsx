import { useState } from "react";
import axios from "axios";

export default function Reservas() {
  const [form, setForm] = useState({});
  const userId = localStorage.getItem("userId");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const reservar = async () => {
    await axios.post("http://localhost:3001/reservas", {
      ...form,
      userId: Number(userId)
    });
    alert("Reserva confirmada!");
  };

  return (
    <div>
      <h1>Reservas</h1>

      <input name="data" placeholder="Data" onChange={onChange} />
      <input name="horario" placeholder="Horário" onChange={onChange} />
      <input name="nome" placeholder="Nome do cliente" onChange={onChange} />
      <input name="contato" placeholder="Contato" onChange={onChange} />
      <input name="qtde" placeholder="Quantidade" onChange={onChange} />
      <input name="mesa" placeholder="Mesa" onChange={onChange} />

      <button onClick={reservar}>Confirmar</button>
    </div>
  );
}
