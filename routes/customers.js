import { Router } from "express";
import CustomersController from "../controllers/CustomersController.js";


const router = Router();


router.get("/", CustomersController.getAll);
router.get("/:id", CustomersController.specificUser);
router.post("/", CustomersController.insert);
router.put("/:id",CustomersController.update)


export default router;