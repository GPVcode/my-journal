const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "IAMACODER",
    host: "localhost",
    database: "journal",
    port: 5432
})

module.exports = pool;