import knex from '../config/db.js'

class Games {

    static async getData(filter=false){
        
        const data = await knex('games').select('games.*','categories.name as categoryName').innerJoin('categories','games.categoryId','=','categories.id')
        .modify(query=>{
            if(filter){
                query.where('games.name','ilike',`%${filter}%`)
            }
        });
        return data;
    }

    static async exists(column,value) {

        const data = await knex('games').where(column,value);
        return data.length>0?true:false;
    }

    static async insert(game) {

        const data = await knex('games').insert(game);
        return data;


    }


}

export default Games;