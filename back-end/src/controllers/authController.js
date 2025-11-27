import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const cadastrar = async (req, res) => {
  try {
    const { nome, sobrenome, email, senha, rua, numero, bairro, cidade, uf } = req.body;

    const hash = await bcrypt.hash(senha, 10);

    const user = await prisma.usuario.create({
      data: { nome, sobrenome, email, senha: hash, rua, numero, bairro, cidade, uf }
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Erro ao cadastrar" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    const valid = await bcrypt.compare(senha, user.senha);
    if (!valid) return res.status(400).json({ error: "Senha incorreta" });

    const token = jwt.sign({ id: user.id }, "segredo", { expiresIn: "1d" });

    res.json({ token, userId: user.id });
  } catch (err) {
    res.status(500).json({ error: "Erro ao logar" });
  }
};
