import knex from '../config/db.js'

class Customers {

    static async getAll(){
        
        const data = await knex('customers').select();
        return data;
    }

    static async getOne(id){
        const data = await knex('customers').where('id',id);
        return data;
    }

    static async exists(column,value) {

        const data = await knex('customers').where(column,value);
        return data.length>0?true:false;
    }

    static async insert(customer) {

        const data = await knex('customers').insert(customer);
        return data;

    }
    static async update(id,customer) {

        const data = await knex('customers').where({id}).update(customer);
        return data;

    }


}

export default Customers;