import { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [form, setForm] = useState({});

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const cadastrar = async () => {
    await axios.post("http://localhost:3001/auth/register", form);
    alert("Cadastrado!");
  };

  return (
    <div>
      <h1>Cadastro</h1>

      <input name="nome" placeholder="Nome" onChange={onChange} />
      <input name="sobrenome" placeholder="Sobrenome" onChange={onChange} />
      <input name="email" placeholder="Email" onChange={onChange} />
      <input name="senha" placeholder="Senha" onChange={onChange} />
      <input name="rua" placeholder="Rua" onChange={onChange} />
      <input name="numero" placeholder="Número" onChange={onChange} />
      <input name="bairro" placeholder="Bairro" onChange={onChange} />
      <input name="cidade" placeholder="Cidade" onChange={onChange} />
      <input name="uf" placeholder="UF" onChange={onChange} />

      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}
