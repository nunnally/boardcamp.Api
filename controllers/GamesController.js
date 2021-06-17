import Categories from '../models/categories.js'
import Games from "../models/games.js";

class GamesController{

    static async getAll(req,res){
        
        const data = await Games.getData(req.query.name||false)
        res.status(200).send(data)
        
    }

    static async insert(req,res){

        let { name,image,stockTotal,categoryId,pricePerDay } = req.body;

        if(await Categories.exists(categoryId,`id`)){
            await Games.insert({name,image,stockTotal,categoryId,pricePerDay})
            res.send(200)

        }
 
    }

}

export default GamesController;