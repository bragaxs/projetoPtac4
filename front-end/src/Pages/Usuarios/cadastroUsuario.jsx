import "../global.css";


export default function Cadastro() {
return (
<main>
<h1>Cadastro</h1>
<form>
<input type="text" placeholder="Nome" />
<input type="text" placeholder="Sobrenome" />
<input type="email" placeholder="E-mail" />
<input type="text" placeholder="Rua" />
<input type="number" placeholder="Nº" />
<input type="text" placeholder="Bairro" />
<input type="text" placeholder="Cidade" />
<input type="text" placeholder="UF" />
<button>Cadastrar</button>
</form>
</main>
);
}