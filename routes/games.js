import { Router } from "express";
import GamesController from "../controllers/GamesController.js";


const router = Router();


router.get("/", GamesController.getAll);
router.post("/", GamesController.insert);


export default router;