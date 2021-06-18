import Customers from "../models/customers.js";

class CustomersController{

    static async getAll(req,res){
        
        const data = await Customers.getAll()
        res.status(200).send(data)
        
    }

    static async insert(req,res){

        let { name,phone,cpf,birthday } = req.body;

        if(await Customers.exists('cpf',cpf)){
            return res.send(409)
        }

        try{
            await Customers.insert({name,phone,cpf,birthday})
            res.send(200)
        }
        catch(e){
            console.log(e)
        }
    }


    static async specificUser(req,res){
        
        const data = await Customers.getOne(req.params.id)
        res.status(200).send(data)
        
    }
    static async update(req,res){
        let customer = req.body;
        const data = await Customers.update(req.params.id,customer)
        res.sendStatus(200);
        
    }

}

export default CustomersController;