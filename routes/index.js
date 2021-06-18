import express from 'express';
const { Router, Request, Response } = express;
import categories from "./categories.js";
import games from "./games.js"
import customers from "./customers.js"
import rentals from "./rentals.js"


const routes = Router();


routes.use("/categories", categories);
routes.use("/games", games);
routes.use("/customers",customers)
routes.use("/rentals",rentals)



export default routes;