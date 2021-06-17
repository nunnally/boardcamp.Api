import knex from '../config/db.js'

class Games {

    static async getData(filter=false){
        
        const data = await knex('games').select().modify(query=>{
            if(filter){
                query.where('name','ilike',`%${filter}%`)
            }
        }).toString();
        return data;
    }

    static async exists(column,value="name") {

        const data = await knex('games').where(column,value);
        return data.length>0?true:false;
    }

    static async insert(game) {

        const data = await knex('games').insert(game);
        return data;


    }


}

export default Games;