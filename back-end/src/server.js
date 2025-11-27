import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import reservasRoutes from "./routes/reservas.js";
import cardapioRoutes from "./routes/cardapio.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/reservas", reservasRoutes);
app.use("/cardapio", cardapioRoutes);

app.listen(3001, () => console.log("API rodando na porta 3001"));
