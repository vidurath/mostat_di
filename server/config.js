const db = require('knex')({
    client: "pg",
    connection: {
        host: 'localhost',
        user: 'gravitacefinancellc',
        password: 'vidurath123',
        database: 'garden',
        port: 5432
    }
})

module.exports = db;