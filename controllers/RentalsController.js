import Games from "../models/games.js";
import Customers from "../models/customers.js";
//import Rentals from "../models/rentals.js";


class RentalsController{

    static async getAll(req,res){
        
        //const data = await Retails.getData(req.query.name||false)
        //res.status(200).send(data)
        
    }

    static async insert(req,res){

        console.log('got called')
        
        let { customerId,gameId,daysRented } = req.body;

        if(!(await Games.exists('id',gameId) && await Customers.exists('id',customerId))){
            
            return res.sendStatus(400)

        }
        return res.status(200).send(req.body)


 
    }

}

export default RentalsController;