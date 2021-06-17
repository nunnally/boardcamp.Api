import express from 'express';
const { Router, Request, Response } = express;
import categories from "./categories.js";
import games from "./games.js"


const routes = Router();


routes.use("/categories", categories);
routes.use("/games", games);



export default routes;