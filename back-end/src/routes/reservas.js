import express from "express";
import { criarReserva, listarReservas } from "../controllers/reservaController.js";

const router = express.Router();

router.post("/", criarReserva);
router.get("/:userId", listarReservas);

export default router;
