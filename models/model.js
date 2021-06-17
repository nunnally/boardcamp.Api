//Se isso funcionar eu to eh doido pqp
import knex from '../config/db.js'

class Model{


    async getAll(){
        
        const data = await knex(this.database).select();
        return data;
    }

}

export default Model;