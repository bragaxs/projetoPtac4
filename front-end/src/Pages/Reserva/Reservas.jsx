import "../global.css";


export default function Reservas() {
return (
<main>
<h1>Fazer Reserva</h1>
<form>
<input type="date" />
<input type="time" />
<input type="text" placeholder="Nome do Cliente" />
<input type="text" placeholder="Contato" />
<input type="number" placeholder="Quantidade de Pessoas" />
<button>Confirmar Reserva</button>
</form>
</main>
);
}