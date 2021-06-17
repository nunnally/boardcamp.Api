import Categories from "../models/categories.js";
import knex from '../config/db.js'

class CategoriesController{

    static async getAll(req,res){
        
        const data = await Categories.getAll()
        res.status(200).send(data)
        
    }

    static async insert(req,res){

        let { name } = req.body;

        if(await Categories.exists(name)) {
            res.send(409)
        }else{
            await Categories.insert(name)
            res.send(200)
        }
        
    }

}

export default CategoriesController;