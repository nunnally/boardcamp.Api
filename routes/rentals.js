import { Router } from "express";
import RentalsController from "../controllers/RentalsController.js";


const router = Router();


router.get("/", RentalsController.getAll);
router.post("/", RentalsController.insert);



export default router;