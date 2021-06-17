import knex from 'knex'




  export default knex({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'bootcamp_role',
      port : 5432,
      password : 'senha_super_hiper_ultra_secreta_do_role_do_bootcamp',
      database : 'boardcamp'
    }
  });;

