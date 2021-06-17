import knex from '../config/db.js'
import Model from './model.js'

class Categories extends Model {

    constructor(){
        super();
        this.database="categories"
    }

    async exists(name) {

        const data = await knex('categories').where('name',name);
        return data.length>0?true:false;
    }

    async insert(name) {

        const data = await knex('categories').insert({name});
        return data;

    }


}


export default new Categories();