import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const logar = async () => {
    const res = await axios.post("http://localhost:3001/auth/login", { email, senha });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("userId", res.data.userId);
    alert("Logado!");
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)} />
      <button onClick={logar}>Entrar</button>
    </div>
  );
}
